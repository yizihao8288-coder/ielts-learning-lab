$ErrorActionPreference = "SilentlyContinue"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$ServerScript = Join-Path $Root "serve-ielts.ps1"
$Url = "http://127.0.0.1:8765/index.html"

function Test-TrainerServer {
  try {
    $Response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
    return $Response.StatusCode -eq 200
  } catch {
    return $false
  }
}

function Get-ServerProcess {
  $FullServerScript = [System.IO.Path]::GetFullPath($ServerScript)
  return @(
    Get-CimInstance Win32_Process |
      Where-Object {
        $_.CommandLine -and
        $_.CommandLine.Contains($FullServerScript) -and
        $_.CommandLine.Contains("-File")
      }
  )
}

function Start-TrainerServer {
  Start-Process -FilePath "powershell.exe" `
    -ArgumentList @("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", $ServerScript) `
    -WorkingDirectory $Root `
    -WindowStyle Hidden
}

while ($true) {
  if (-not (Test-TrainerServer)) {
    $ServerProcess = Get-ServerProcess
    if (-not $ServerProcess) {
      Start-TrainerServer
    }
  }

  Start-Sleep -Seconds 5
}
