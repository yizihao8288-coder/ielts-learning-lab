$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 8765
$Address = [System.Net.IPAddress]::Parse("127.0.0.1")

$MimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
}

Add-Type -AssemblyName System.Speech

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream] $Stream,
    [int] $StatusCode,
    [string] $StatusText,
    [string] $ContentType,
    [byte[]] $Body
  )

  $Header = "HTTP/1.1 $StatusCode $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $HeaderBytes = [Text.Encoding]::ASCII.GetBytes($Header)
  $Stream.Write($HeaderBytes, 0, $HeaderBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

function ConvertTo-JsonBytes {
  param([object] $Value)
  return [Text.Encoding]::UTF8.GetBytes(($Value | ConvertTo-Json -Depth 5 -Compress))
}

function Get-QueryMap {
  param([string] $QueryString)

  $Map = @{}
  if ([string]::IsNullOrWhiteSpace($QueryString)) {
    return $Map
  }

  foreach ($Pair in $QueryString.TrimStart("?").Split("&")) {
    if ([string]::IsNullOrWhiteSpace($Pair)) {
      continue
    }

    $Parts = $Pair.Split("=", 2)
    $Key = [Uri]::UnescapeDataString($Parts[0])
    $Value = if ($Parts.Length -gt 1) { [Uri]::UnescapeDataString($Parts[1].Replace("+", " ")) } else { "" }
    $Map[$Key] = $Value
  }

  return $Map
}

function Get-InstalledVoiceList {
  $Synth = [System.Speech.Synthesis.SpeechSynthesizer]::new()
  try {
    return @(
      $Synth.GetInstalledVoices() |
        Where-Object { $_.Enabled } |
        ForEach-Object {
          $Info = $_.VoiceInfo
          [PSCustomObject]@{
            name = $Info.Name
            lang = $Info.Culture.Name
            gender = [string] $Info.Gender
            source = "Windows"
          }
        }
    )
  } finally {
    $Synth.Dispose()
  }
}

function ConvertTo-SsmlText {
  param([string] $Text)

  $Escaped = [System.Security.SecurityElement]::Escape($Text)
  $Escaped = $Escaped -replace "([,;:])", '$1<break time="170ms"/>'
  $Escaped = $Escaped -replace "([.!?])", '$1<break time="300ms"/>'
  return "<speak version='1.0' xml:lang='en-GB'><prosody rate='medium' pitch='-2%'>$Escaped</prosody></speak>"
}

function New-TtsAudio {
  param(
    [string] $Text,
    [string] $VoiceName,
    [double] $Rate
  )

  $Synth = [System.Speech.Synthesis.SpeechSynthesizer]::new()
  $Stream = [System.IO.MemoryStream]::new()

  try {
    if (-not [string]::IsNullOrWhiteSpace($VoiceName)) {
      $Synth.SelectVoice($VoiceName)
    } else {
      $BritishVoice = $Synth.GetInstalledVoices() |
        Where-Object { $_.Enabled -and $_.VoiceInfo.Culture.Name -eq "en-GB" } |
        Select-Object -First 1

      if ($BritishVoice) {
        $Synth.SelectVoice($BritishVoice.VoiceInfo.Name)
      }
    }

    $MappedRate = [Math]::Round(($Rate - 0.85) * 20)
    $Synth.Rate = [Math]::Max(-10, [Math]::Min(10, [int] $MappedRate))
    $Synth.SetOutputToWaveStream($Stream)
    try {
      $Synth.SpeakSsml((ConvertTo-SsmlText $Text))
    } catch {
      $Synth.Speak($Text)
    }
    return $Stream.ToArray()
  } finally {
    $Synth.Dispose()
    $Stream.Dispose()
  }
}

$Listener = [System.Net.Sockets.TcpListener]::new($Address, $Port)
$Listener.Start()

try {
  while ($true) {
    $Client = $Listener.AcceptTcpClient()

    try {
      $Stream = $Client.GetStream()
      $Reader = [System.IO.StreamReader]::new($Stream, [Text.Encoding]::ASCII, $false, 1024, $true)
      $RequestLine = $Reader.ReadLine()

      while ($true) {
        $Line = $Reader.ReadLine()
        if ($null -eq $Line -or $Line -eq "") {
          break
        }
      }

      if ([string]::IsNullOrWhiteSpace($RequestLine)) {
        $Body = [Text.Encoding]::UTF8.GetBytes("Bad request")
        Send-Response $Stream 400 "Bad Request" "text/plain; charset=utf-8" $Body
        continue
      }

      $Parts = $RequestLine.Split(" ")
      $RequestTarget = if ($Parts.Length -ge 2) { $Parts[1] } else { "/" }
      $RequestPath = $RequestTarget.Split("?")[0].TrimStart("/")
      $QueryString = if ($RequestTarget.Contains("?")) { $RequestTarget.Substring($RequestTarget.IndexOf("?") + 1) } else { "" }
      $RequestPath = [Uri]::UnescapeDataString($RequestPath)

      if ([string]::IsNullOrWhiteSpace($RequestPath)) {
        $RequestPath = "index.html"
      }

      if ($RequestPath -eq "voices") {
        $Body = ConvertTo-JsonBytes @{ voices = Get-InstalledVoiceList }
        Send-Response $Stream 200 "OK" "application/json; charset=utf-8" $Body
        continue
      }

      if ($RequestPath -eq "tts") {
        $Query = Get-QueryMap $QueryString
        $Text = if ($Query.ContainsKey("text")) { $Query["text"] } else { "" }
        $VoiceName = if ($Query.ContainsKey("voice")) { $Query["voice"] } else { "" }
        $Rate = if ($Query.ContainsKey("rate")) { [double] $Query["rate"] } else { 0.85 }

        if ([string]::IsNullOrWhiteSpace($Text)) {
          $Body = [Text.Encoding]::UTF8.GetBytes("Missing text")
          Send-Response $Stream 400 "Bad Request" "text/plain; charset=utf-8" $Body
          continue
        }

        $Body = New-TtsAudio $Text $VoiceName $Rate
        Send-Response $Stream 200 "OK" "audio/wav" $Body
        continue
      }

      $CandidatePath = Join-Path $Root $RequestPath
      $FullPath = [System.IO.Path]::GetFullPath($CandidatePath)
      $FullRoot = [System.IO.Path]::GetFullPath($Root)

      if (-not $FullPath.StartsWith($FullRoot, [System.StringComparison]::OrdinalIgnoreCase) -or -not [System.IO.File]::Exists($FullPath)) {
        $Body = [Text.Encoding]::UTF8.GetBytes("Not found")
        Send-Response $Stream 404 "Not Found" "text/plain; charset=utf-8" $Body
        continue
      }

      $Extension = [System.IO.Path]::GetExtension($FullPath).ToLowerInvariant()
      $ContentType = if ($MimeTypes.ContainsKey($Extension)) { $MimeTypes[$Extension] } else { "application/octet-stream" }
      $Body = [System.IO.File]::ReadAllBytes($FullPath)
      Send-Response $Stream 200 "OK" $ContentType $Body
    } finally {
      $Client.Close()
    }
  }
} finally {
  $Listener.Stop()
}
