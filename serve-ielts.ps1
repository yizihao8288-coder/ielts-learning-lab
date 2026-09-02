$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Port = 8765
$Address = [System.Net.IPAddress]::Parse("127.0.0.1")
$StateFile = Join-Path $Root "trainer-state.json"
$StateBackupDirectory = Join-Path $Root "data-backups"
$EdgePackageRoot = Join-Path $Root ".runtime\python-packages"
$EdgeTtsScript = Join-Path $Root "edge_tts_speak.py"
$EdgePython = "D:\programming _Learning\python.exe"

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
  try {
    $Stream.Write($HeaderBytes, 0, $HeaderBytes.Length)
    $Stream.Write($Body, 0, $Body.Length)
    $Stream.Flush()
  } catch [System.IO.IOException] {
    # Browsers may cancel speculative or stale requests. One cancelled request
    # must not terminate the whole local server.
  }
}

function ConvertTo-JsonBytes {
  param([object] $Value)
  return [Text.Encoding]::UTF8.GetBytes(($Value | ConvertTo-Json -Depth 5 -Compress))
}

function Backup-StateFile {
  if (-not [System.IO.File]::Exists($StateFile)) {
    return
  }

  [System.IO.Directory]::CreateDirectory($StateBackupDirectory) | Out-Null
  $LatestBackup = Get-ChildItem -LiteralPath $StateBackupDirectory -Filter "trainer-state-auto-*.json" -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if ($LatestBackup -and ((Get-Date) - $LatestBackup.LastWriteTime).TotalMinutes -lt 30) {
    return
  }

  $Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $BackupPath = Join-Path $StateBackupDirectory "trainer-state-auto-$Timestamp.json"
  [System.IO.File]::Copy($StateFile, $BackupPath, $false)

  $Backups = @(Get-ChildItem -LiteralPath $StateBackupDirectory -Filter "trainer-state-auto-*.json" -File |
    Sort-Object LastWriteTime -Descending)
  if ($Backups.Count -gt 48) {
    $Backups | Select-Object -Skip 48 | Remove-Item -Force
  }
}

function Write-StateFileAtomic {
  param([byte[]] $Bytes)

  $TemporaryPath = Join-Path $Root ".trainer-state-$PID.tmp"
  try {
    [System.IO.File]::WriteAllBytes($TemporaryPath, $Bytes)
    if ([System.IO.File]::Exists($StateFile)) {
      Backup-StateFile
      try {
        [System.IO.File]::Replace($TemporaryPath, $StateFile, $null)
      } catch {
        Move-Item -LiteralPath $TemporaryPath -Destination $StateFile -Force
      }
    } else {
      Move-Item -LiteralPath $TemporaryPath -Destination $StateFile
    }
  } finally {
    if ([System.IO.File]::Exists($TemporaryPath)) {
      Remove-Item -LiteralPath $TemporaryPath -Force
    }
  }
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

function Read-RequestBody {
  param(
    [System.IO.StreamReader] $Reader,
    [hashtable] $Headers
  )

  if (-not $Headers.ContainsKey("content-length")) {
    return ""
  }

  $Length = [int] $Headers["content-length"]
  if ($Length -le 0) {
    return ""
  }

  $Buffer = New-Object char[] $Length
  $Read = $Reader.ReadBlock($Buffer, 0, $Length)
  if ($Read -le 0) {
    return ""
  }
  return -join $Buffer[0..($Read - 1)]
}

function Get-InstalledVoiceList {
  $Voices = @()
  if ([System.IO.File]::Exists($EdgePython) -and [System.IO.File]::Exists((Join-Path $EdgePackageRoot "edge_tts\__init__.py"))) {
    $Voices += @(
      [PSCustomObject]@{ name = "Edge:en-GB-SoniaNeural"; displayName = "Sonia · 雅思英音"; lang = "en-GB"; accentLabel = "英式"; source = "Edge Neural"; aiGenerated = $true },
      [PSCustomObject]@{ name = "Edge:en-GB-RyanNeural"; displayName = "Ryan · 雅思英音"; lang = "en-GB"; accentLabel = "英式"; source = "Edge Neural"; aiGenerated = $true },
      [PSCustomObject]@{ name = "Edge:en-AU-NatashaNeural"; displayName = "Natasha · 雅思澳音"; lang = "en-AU"; accentLabel = "澳式"; source = "Edge Neural"; aiGenerated = $true },
      [PSCustomObject]@{ name = "Edge:en-AU-WilliamMultilingualNeural"; displayName = "William · 雅思澳音"; lang = "en-AU"; accentLabel = "澳式"; source = "Edge Neural"; aiGenerated = $true },
      [PSCustomObject]@{ name = "Edge:en-NZ-MollyNeural"; displayName = "Molly · 雅思新西兰音"; lang = "en-NZ"; accentLabel = "新西兰"; source = "Edge Neural"; aiGenerated = $true },
      [PSCustomObject]@{ name = "Edge:en-NZ-MitchellNeural"; displayName = "Mitchell · 雅思新西兰音"; lang = "en-NZ"; accentLabel = "新西兰"; source = "Edge Neural"; aiGenerated = $true }
    )
  }

  if (-not [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY) -and $env:OPENAI_API_KEY.StartsWith("sk-")) {
    $Voices += @(
      [PSCustomObject]@{
        name = "OpenAI:marin:en-GB"
        displayName = "Marin · 雅思英音"
        lang = "en-GB"
        accentLabel = "英式"
        source = "OpenAI"
        aiGenerated = $true
      },
      [PSCustomObject]@{
        name = "OpenAI:cedar:en-AU"
        displayName = "Cedar · 雅思澳音"
        lang = "en-AU"
        accentLabel = "澳式"
        source = "OpenAI"
        aiGenerated = $true
      },
      [PSCustomObject]@{
        name = "OpenAI:coral:en-NZ"
        displayName = "Coral · 雅思新西兰音"
        lang = "en-NZ"
        accentLabel = "新西兰"
        source = "OpenAI"
        aiGenerated = $true
      }
    )
  }

  $Synth = [System.Speech.Synthesis.SpeechSynthesizer]::new()
  try {
    $Voices += @(
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
    return $Voices
  } finally {
    $Synth.Dispose()
  }
}

function Get-OpenAiVoiceProfile {
  param([string] $VoiceName)

  switch ($VoiceName) {
    "OpenAI:marin:en-GB" {
      return @{ voice = "marin"; accent = "an authentic, educated British English accent used in an IELTS Listening recording" }
    }
    "OpenAI:cedar:en-AU" {
      return @{ voice = "cedar"; accent = "an authentic Australian English accent used in an IELTS Listening recording" }
    }
    "OpenAI:coral:en-NZ" {
      return @{ voice = "coral"; accent = "an authentic New Zealand English accent used in an IELTS Listening recording" }
    }
    default { return $null }
  }
}

function New-EdgeTtsAudio {
  param(
    [string] $Text,
    [string] $VoiceName,
    [double] $Rate,
    [string] $Style = "ielts",
    [double] $Intonation = 0.75
  )

  if (-not $VoiceName.StartsWith("Edge:")) { return $null }
  if (-not [System.IO.File]::Exists($EdgePython) -or -not [System.IO.File]::Exists($EdgeTtsScript)) { return $null }

  $NeuralVoice = $VoiceName.Substring(5)
  $RatePercent = [Math]::Max(-35, [Math]::Min(20, [int][Math]::Round(($Rate - 1) * 100)))
  if ($Style -eq "clear") { $RatePercent = [Math]::Max(-35, $RatePercent - 8) }
  $RateArgument = if ($RatePercent -ge 0) { "+$RatePercent%" } else { "$RatePercent%" }
  $PitchHz = if ($Style -eq "original") { 0 } elseif ($Text.TrimEnd().EndsWith("?")) { [int][Math]::Round(4 * $Intonation) } else { -1 }
  $PitchArgument = if ($PitchHz -ge 0) { "+$($PitchHz)Hz" } else { "$($PitchHz)Hz" }

  $StartInfo = [System.Diagnostics.ProcessStartInfo]::new()
  $StartInfo.FileName = $EdgePython
  $StartInfo.UseShellExecute = $false
  $StartInfo.CreateNoWindow = $true
  $StartInfo.RedirectStandardInput = $true
  $StartInfo.RedirectStandardOutput = $true
  $StartInfo.RedirectStandardError = $true
  $StartInfo.ArgumentList.Add($EdgeTtsScript)
  $StartInfo.ArgumentList.Add("--voice")
  $StartInfo.ArgumentList.Add($NeuralVoice)
  $StartInfo.ArgumentList.Add("--rate=$RateArgument")
  $StartInfo.ArgumentList.Add("--pitch=$PitchArgument")
  $StartInfo.Environment["PYTHONPATH"] = $EdgePackageRoot
  $StartInfo.Environment["PYTHONPYCACHEPREFIX"] = Join-Path $Root ".runtime\pycache"
  $StartInfo.Environment["TEMP"] = Join-Path $Root ".runtime\temp"
  $StartInfo.Environment["TMP"] = Join-Path $Root ".runtime\temp"

  $Process = [System.Diagnostics.Process]::new()
  $Process.StartInfo = $StartInfo
  $Output = [System.IO.MemoryStream]::new()
  try {
    if (-not $Process.Start()) { throw "Unable to start neural speech helper" }
    $ErrorTask = $Process.StandardError.ReadToEndAsync()
    $Process.StandardInput.Write($Text)
    $Process.StandardInput.Close()
    $Process.StandardOutput.BaseStream.CopyTo($Output)
    $Process.WaitForExit()
    $ErrorText = $ErrorTask.GetAwaiter().GetResult()
    if ($Process.ExitCode -ne 0 -or $Output.Length -eq 0) {
      throw "Neural speech helper failed: $ErrorText"
    }
    return $Output.ToArray()
  } finally {
    $Output.Dispose()
    $Process.Dispose()
  }
}

function New-OpenAiTtsAudio {
  param(
    [string] $Text,
    [string] $VoiceName,
    [double] $Rate,
    [string] $Style = "ielts",
    [string] $Kind = "sentence",
    [double] $Intonation = 0.75
  )

  $Profile = Get-OpenAiVoiceProfile $VoiceName
  if ($null -eq $Profile -or [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
    return $null
  }

  $Pace = if ($Rate -lt 0.82) { "a deliberately slow pace" } elseif ($Rate -gt 1.03) { "a brisk but natural pace" } else { "a natural IELTS pace" }
  $StyleDirection = if ($Style -eq "clear") {
    "Prioritize clarity and slightly stronger word boundaries, while keeping connected speech natural."
  } elseif ($Style -eq "original") {
    "Keep the delivery neutral and understated."
  } else {
    "Use realistic sentence stress, connected speech, subtle pitch movement, and conversational rhythm. Let questions rise naturally and statements resolve naturally."
  }
  $KindDirection = if ($Kind -eq "word") {
    "Pronounce only the supplied word or phrase once, accurately, with no introduction or explanation."
  } elseif ($Kind -eq "passage") {
    "Read the passage as a coherent IELTS Listening excerpt, respecting speaker intent and punctuation."
  } else {
    "Read the sentence as a natural line from an IELTS Listening conversation."
  }
  $Intensity = [Math]::Max(0.25, [Math]::Min(1, $Intonation))
  $Instructions = "Speak with $($Profile.accent), at $Pace. $StyleDirection $KindDirection Use expressive but believable intonation at intensity $Intensity. Never read transcript navigation markers or question labels such as [17], [Q4], or 'question four'. Do not sound like an announcer or a robot."

  $RequestBody = @{
    model = "gpt-4o-mini-tts"
    voice = $Profile.voice
    input = $Text
    instructions = $Instructions
    response_format = "wav"
  } | ConvertTo-Json -Depth 4

  $Client = [System.Net.Http.HttpClient]::new()
  try {
    $Client.DefaultRequestHeaders.Authorization = [System.Net.Http.Headers.AuthenticationHeaderValue]::new("Bearer", $env:OPENAI_API_KEY)
    $Content = [System.Net.Http.StringContent]::new($RequestBody, [Text.Encoding]::UTF8, "application/json")
    $Response = $Client.PostAsync("https://api.openai.com/v1/audio/speech", $Content).GetAwaiter().GetResult()
    try {
      if (-not $Response.IsSuccessStatusCode) {
        throw "OpenAI speech request failed with status $([int] $Response.StatusCode)"
      }
      return $Response.Content.ReadAsByteArrayAsync().GetAwaiter().GetResult()
    } finally {
      $Response.Dispose()
      $Content.Dispose()
    }
  } finally {
    $Client.Dispose()
  }
}

function ConvertTo-SsmlText {
  param(
    [string] $Text,
    [string] $Style = "ielts",
    [string] $Kind = "sentence",
    [double] $Intonation = 0.75
  )

  $Escaped = [System.Security.SecurityElement]::Escape($Text)
  $CommaPause = if ($Style -eq "clear") { 155 } elseif ($Style -eq "original") { 90 } else { 115 }
  $SentencePause = if ($Style -eq "clear") { 285 } elseif ($Style -eq "original") { 175 } else { 220 }

  if ($Kind -ne "word") {
    $Escaped = $Escaped -replace "([,])", ('$1<break time="' + $CommaPause + 'ms"/>')
    $Escaped = $Escaped -replace "([;:])", ('$1<break time="' + ($CommaPause + 45) + 'ms"/>')
    $Escaped = $Escaped -replace "([.!?])", ('$1<break time="' + $SentencePause + 'ms"/>')
  }

  if ($Style -eq "ielts" -and $Kind -ne "word") {
    $Escaped = $Escaped -replace "\b(however|therefore|although|because|firstly|secondly|finally|in contrast|for example)\b", '<emphasis level="moderate">$1</emphasis>'
  }

  $PitchValue = 0
  if ($Style -eq "clear") { $PitchValue = -1 }
  if ($Style -eq "ielts" -and $Text.TrimEnd().EndsWith("?")) {
    $PitchValue = [Math]::Round(4 * [Math]::Max(0.25, [Math]::Min(1, $Intonation)))
  } elseif ($Style -eq "ielts" -and $Kind -ne "word") {
    $PitchValue = -1
  }
  $PitchText = if ($PitchValue -gt 0) { "+$PitchValue%" } elseif ($PitchValue -lt 0) { "$PitchValue%" } else { "+0%" }
  return "<speak version='1.0' xml:lang='en-GB'><prosody rate='medium' pitch='$PitchText'>$Escaped</prosody></speak>"
}

function New-TtsAudio {
  param(
    [string] $Text,
    [string] $VoiceName,
    [double] $Rate,
    [string] $Style = "ielts",
    [string] $Kind = "sentence",
    [double] $Intonation = 0.75
  )

  if ($VoiceName.StartsWith("Edge:")) {
    try {
      $EdgeAudio = New-EdgeTtsAudio $Text $VoiceName $Rate $Style $Intonation
      if ($null -ne $EdgeAudio -and $EdgeAudio.Length -gt 0) {
        return $EdgeAudio
      }
    } catch {
      Write-Warning "Online neural speech generation failed; using the installed offline voice instead."
    }
    $VoiceName = ""
  }

  $OpenAiProfile = Get-OpenAiVoiceProfile $VoiceName
  if ($null -ne $OpenAiProfile) {
    try {
      $OpenAiAudio = New-OpenAiTtsAudio $Text $VoiceName $Rate $Style $Kind $Intonation
      if ($null -ne $OpenAiAudio -and $OpenAiAudio.Length -gt 0) {
        return $OpenAiAudio
      }
    } catch {
      Write-Warning "Natural speech generation failed; using the installed offline voice instead."
    }
    $VoiceName = ""
  }

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

    $MappedRate = [Math]::Round(($Rate - 0.95) * 20)
    $Synth.Rate = [Math]::Max(-10, [Math]::Min(10, [int] $MappedRate))
    $Synth.SetOutputToWaveStream($Stream)
    try {
      $Synth.SpeakSsml((ConvertTo-SsmlText $Text $Style $Kind $Intonation))
    } catch {
      $Synth.Speak($Text)
    }
    return $Stream.ToArray()
  } finally {
    $Synth.Dispose()
    $Stream.Dispose()
  }
}

function Get-GeneratedDefinition {
  param([string] $Word)

  $ApiKey = $env:OPENAI_API_KEY
  if ([string]::IsNullOrWhiteSpace($ApiKey) -or -not $ApiKey.StartsWith("sk-")) {
    return $null
  }

  $Model = if ([string]::IsNullOrWhiteSpace($env:OPENAI_MODEL)) { "gpt-4o-mini" } else { $env:OPENAI_MODEL }
  $BodyObject = @{
    model = $Model
    messages = @(
      @{
        role = "system"
        content = "You generate IELTS vocabulary notes for a learner. Return only strict JSON with keys word, zh, en, example. Use the target word or phrase exactly as provided. zh must be concise Simplified Chinese for the most common IELTS listening/reading meaning. en must be a concise English definition. example must be one natural, grammatical IELTS-style sentence that uses the target naturally in context and shows its meaning or common collocation. If the target is a month, weekday, proper noun, unit, number, spelling item, or phrase, use it in its normal grammatical role. Do not write meta-language such as 'used the word', 'mentioned the word', 'connected the word', 'example of', 'the term', 'target word', or 'vocabulary word'. Do not write vague sentences about lectures focusing on the word. The example must help a learner infer the meaning from context and must contain the exact target word or phrase."
      },
      @{
        role = "user"
        content = "Target word or phrase: $Word"
      }
    )
    temperature = 0.2
    response_format = @{
      type = "json_object"
    }
  }
  $Body = $BodyObject | ConvertTo-Json -Depth 8

  $Response = Invoke-RestMethod `
    -Uri "https://api.openai.com/v1/chat/completions" `
    -Method Post `
    -Headers @{
      Authorization = "Bearer $ApiKey"
      "Content-Type" = "application/json"
    } `
    -Body $Body

  $Content = $Response.choices[0].message.content
  if ([string]::IsNullOrWhiteSpace($Content)) {
    return $null
  }

  return $Content | ConvertFrom-Json
}

function Get-GeneratedMnemonic {
  param(
    [string] $Word,
    [string] $Zh,
    [string] $Example
  )

  $ApiKey = $env:OPENAI_API_KEY
  if ([string]::IsNullOrWhiteSpace($ApiKey) -or -not $ApiKey.StartsWith("sk-")) {
    return $null
  }

  $Model = if ([string]::IsNullOrWhiteSpace($env:OPENAI_MODEL)) { "gpt-4o-mini" } else { $env:OPENAI_MODEL }
  $BodyObject = @{
    model = $Model
    messages = @(
      @{
        role = "system"
        content = "You create concise Chinese memory aids for IELTS vocabulary. Return only strict JSON with one key: mnemonic. Write 2 to 4 short Chinese sentences for a Chinese learner. Choose the most useful combination of accurate roots or affixes, sound association, vivid everyday imagery, semantic contrast, and the supplied example. Do not invent false etymology. If a sound association is only a memory hook, clearly call it a memory hook rather than a word origin. Keep the explanation concrete, natural, and easy to recall."
      },
      @{
        role = "user"
        content = "Word: $Word`nChinese meaning: $Zh`nExample: $Example"
      }
    )
    temperature = 0.45
    response_format = @{
      type = "json_object"
    }
  }
  $Body = $BodyObject | ConvertTo-Json -Depth 8
  $Response = Invoke-RestMethod `
    -Uri "https://api.openai.com/v1/chat/completions" `
    -Method Post `
    -Headers @{
      Authorization = "Bearer $ApiKey"
      "Content-Type" = "application/json"
    } `
    -Body $Body
  $Content = $Response.choices[0].message.content
  if ([string]::IsNullOrWhiteSpace($Content)) {
    return $null
  }
  return $Content | ConvertFrom-Json
}

function Test-GeneratedDefinition {
  param(
    [object] $Definition,
    [string] $Word
  )

  if ($null -eq $Definition) {
    return $false
  }

  $Zh = [string] $Definition.zh
  $En = [string] $Definition.en
  $Example = [string] $Definition.example

  if ([string]::IsNullOrWhiteSpace($Zh) -or [string]::IsNullOrWhiteSpace($En) -or [string]::IsNullOrWhiteSpace($Example)) {
    return $false
  }

  return $Example.IndexOf($Word, [System.StringComparison]::OrdinalIgnoreCase) -ge 0
}

$Listener = [System.Net.Sockets.TcpListener]::new($Address, $Port)
$Listener.Start()

try {
  while ($true) {
    $Client = $Listener.AcceptTcpClient()

    try {
      $Stream = $Client.GetStream()
      $Stream.ReadTimeout = 1000
      $Stream.WriteTimeout = 5000
      $Reader = [System.IO.StreamReader]::new($Stream, [Text.Encoding]::ASCII, $false, 1024, $true)
      $RequestLine = $Reader.ReadLine()

      $Headers = @{}
      while ($true) {
        $Line = $Reader.ReadLine()
        if ($null -eq $Line -or $Line -eq "") {
          break
        }

        $HeaderParts = $Line.Split(":", 2)
        if ($HeaderParts.Length -eq 2) {
          $Headers[$HeaderParts[0].Trim().ToLowerInvariant()] = $HeaderParts[1].Trim()
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

      if ($RequestPath -eq "load-state") {
        if (-not [System.IO.File]::Exists($StateFile)) {
          $Body = ConvertTo-JsonBytes @{ error = "No saved state" }
          Send-Response $Stream 404 "Not Found" "application/json; charset=utf-8" $Body
          continue
        }

        $Body = [System.IO.File]::ReadAllBytes($StateFile)
        Send-Response $Stream 200 "OK" "application/json; charset=utf-8" $Body
        continue
      }

      if ($RequestPath -eq "bootstrap-state.js") {
        if ([System.IO.File]::Exists($StateFile)) {
          $StateJson = [System.IO.File]::ReadAllText($StateFile, [Text.Encoding]::UTF8)
          $Script = "window.__IELTS_SERVER_SNAPSHOT__ = $StateJson;"
        } else {
          $Script = "window.__IELTS_SERVER_SNAPSHOT__ = null;"
        }
        $Body = [Text.Encoding]::UTF8.GetBytes($Script)
        Send-Response $Stream 200 "OK" "application/javascript; charset=utf-8" $Body
        continue
      }

      if ($RequestPath -eq "save-state") {
        $EncodedBody = Read-RequestBody $Reader $Headers
        if ([string]::IsNullOrWhiteSpace($EncodedBody)) {
          $Body = ConvertTo-JsonBytes @{ error = "Missing state" }
          Send-Response $Stream 400 "Bad Request" "application/json; charset=utf-8" $Body
          continue
        }

        try {
          $Bytes = [Convert]::FromBase64String($EncodedBody.Trim())
          $Json = [Text.Encoding]::UTF8.GetString($Bytes)
          if ($Json -notmatch '^\s*\{' -or $Json -notmatch '"savedAt"\s*:\s*[1-9][0-9]*') {
            throw "State snapshot is missing savedAt"
          }
          Write-StateFileAtomic $Bytes
          $Body = ConvertTo-JsonBytes @{ saved = $true; path = $StateFile }
          Send-Response $Stream 200 "OK" "application/json; charset=utf-8" $Body
        } catch {
          $Body = ConvertTo-JsonBytes @{ error = "Invalid state" }
          Send-Response $Stream 400 "Bad Request" "application/json; charset=utf-8" $Body
        }
        continue
      }

      if ($RequestPath -eq "tts") {
        $Query = Get-QueryMap $QueryString
        $Text = if ($Query.ContainsKey("text")) { $Query["text"] } else { "" }
        $Text = (($Text -replace '[\[【]\s*(?:Q(?:uestion)?\s*)?\d{1,3}[A-Za-z]?\s*[\]】]', ' ') -replace '\s+', ' ').Trim()
        $VoiceName = if ($Query.ContainsKey("voice")) { $Query["voice"] } else { "" }
        $Rate = if ($Query.ContainsKey("rate")) { [double] $Query["rate"] } else { 0.85 }
        $Style = if ($Query.ContainsKey("style")) { $Query["style"] } else { "ielts" }
        $Kind = if ($Query.ContainsKey("kind")) { $Query["kind"] } else { "sentence" }
        $Intonation = if ($Query.ContainsKey("intonation")) { [double] $Query["intonation"] } else { 0.75 }

        if ([string]::IsNullOrWhiteSpace($Text)) {
          $Body = [Text.Encoding]::UTF8.GetBytes("Missing text")
          Send-Response $Stream 400 "Bad Request" "text/plain; charset=utf-8" $Body
          continue
        }

        $Body = New-TtsAudio $Text $VoiceName $Rate $Style $Kind $Intonation
        $AudioType = if ($Body.Length -ge 3 -and [Text.Encoding]::ASCII.GetString($Body, 0, 3) -eq "ID3") { "audio/mpeg" } elseif ($Body.Length -ge 2 -and $Body[0] -eq 255 -and ($Body[1] -band 224) -eq 224) { "audio/mpeg" } else { "audio/wav" }
        Send-Response $Stream 200 "OK" $AudioType $Body
        continue
      }

      if ($RequestPath -eq "define") {
        $Query = Get-QueryMap $QueryString
        $Word = if ($Query.ContainsKey("word")) { $Query["word"] } else { "" }

        if ([string]::IsNullOrWhiteSpace($Word)) {
          $Body = ConvertTo-JsonBytes @{ error = "Missing word" }
          Send-Response $Stream 400 "Bad Request" "application/json; charset=utf-8" $Body
          continue
        }

        try {
          $Definition = Get-GeneratedDefinition $Word
          if ($null -eq $Definition) {
            $Body = ConvertTo-JsonBytes @{ error = "OPENAI_API_KEY is not configured" }
            Send-Response $Stream 503 "Service Unavailable" "application/json; charset=utf-8" $Body
            continue
          }

          if (-not (Test-GeneratedDefinition $Definition $Word)) {
            $Body = ConvertTo-JsonBytes @{ error = "API returned an incomplete or invalid IELTS note" }
            Send-Response $Stream 502 "Bad Gateway" "application/json; charset=utf-8" $Body
            continue
          }

          $Body = ConvertTo-JsonBytes @{
            word = if ($Definition.word) { $Definition.word } else { $Word }
            zh = if ($Definition.zh) { $Definition.zh } else { "" }
            en = if ($Definition.en) { $Definition.en } else { "" }
            example = if ($Definition.example) { $Definition.example } else { "" }
          }
          Send-Response $Stream 200 "OK" "application/json; charset=utf-8" $Body
        } catch {
          $Body = ConvertTo-JsonBytes @{ error = "Definition generation failed" }
          Send-Response $Stream 502 "Bad Gateway" "application/json; charset=utf-8" $Body
        }
        continue
      }

      if ($RequestPath -eq "mnemonic") {
        $Query = Get-QueryMap $QueryString
        $Word = if ($Query.ContainsKey("word")) { $Query["word"] } else { "" }
        $Zh = if ($Query.ContainsKey("zh")) { $Query["zh"] } else { "" }
        $Example = if ($Query.ContainsKey("example")) { $Query["example"] } else { "" }

        if ([string]::IsNullOrWhiteSpace($Word)) {
          $Body = ConvertTo-JsonBytes @{ error = "Missing word" }
          Send-Response $Stream 400 "Bad Request" "application/json; charset=utf-8" $Body
          continue
        }

        try {
          $Memory = Get-GeneratedMnemonic $Word $Zh $Example
          if ($null -eq $Memory -or [string]::IsNullOrWhiteSpace([string] $Memory.mnemonic)) {
            $Body = ConvertTo-JsonBytes @{ error = "AI mnemonic service is unavailable" }
            Send-Response $Stream 503 "Service Unavailable" "application/json; charset=utf-8" $Body
            continue
          }
          $Body = ConvertTo-JsonBytes @{ mnemonic = [string] $Memory.mnemonic }
          Send-Response $Stream 200 "OK" "application/json; charset=utf-8" $Body
        } catch {
          $Body = ConvertTo-JsonBytes @{ error = "Mnemonic generation failed" }
          Send-Response $Stream 502 "Bad Gateway" "application/json; charset=utf-8" $Body
        }
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
    } catch [System.IO.IOException] {
      # Chrome opens speculative connections that may never send a request.
      # Release those connections quickly so CSS and JavaScript can load.
    } catch {
      Write-Warning $_.Exception.Message
    } finally {
      $Client.Close()
    }
  }
} finally {
  $Listener.Stop()
}
