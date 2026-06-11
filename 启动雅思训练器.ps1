$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Url = "http://127.0.0.1:8765/index.html"
$KeeperScript = Join-Path $Root "keep-ielts-server.ps1"

function Test-TrainerServer {
  try {
    $Response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2
    return $Response.StatusCode -eq 200
  } catch {
    return $false
  }
}

$FullKeeperScript = [System.IO.Path]::GetFullPath($KeeperScript)
$KeeperProcess = @(
  Get-CimInstance Win32_Process |
    Where-Object {
      $_.CommandLine -and
      $_.CommandLine.Contains($FullKeeperScript) -and
      $_.CommandLine.Contains("-File")
    }
)

if (-not $KeeperProcess) {
  Start-Process -FilePath "powershell.exe" `
    -ArgumentList @("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", $KeeperScript) `
    -WorkingDirectory $Root `
    -WindowStyle Hidden
}

for ($Attempt = 0; $Attempt -lt 12; $Attempt++) {
  if (Test-TrainerServer) {
    Start-Process $Url
    exit 0
  }

  Start-Sleep -Seconds 1
}

Write-Host "Server did not respond. Please run this file again or check port 8765."
Read-Host "Press Enter to close"
exit 1
