$ErrorActionPreference = "SilentlyContinue"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Scripts = @(
  [System.IO.Path]::GetFullPath((Join-Path $Root "serve-ielts.ps1")),
  [System.IO.Path]::GetFullPath((Join-Path $Root "keep-ielts-server.ps1"))
)
$RunScript = [System.IO.Path]::GetFullPath((Join-Path $Root "run.py"))
$CurrentProcessId = $PID

Get-CimInstance Win32_Process |
  Where-Object {
    $Command = $_.CommandLine
    $_.ProcessId -ne $CurrentProcessId -and
    $Command -and
    (
      ($Command.Contains("-File") -and ($Scripts | Where-Object { $Command.Contains($_) })) -or
      $Command.Contains($RunScript)
    )
  } |
  ForEach-Object {
    Stop-Process -Id $_.ProcessId -Force
  }

Write-Host "Done."
