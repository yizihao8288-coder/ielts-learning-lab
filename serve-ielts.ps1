$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Runtime = Join-Path $Root ".runtime"
$RuntimeTemp = Join-Path $Runtime "temp"
$RuntimeCache = Join-Path $Runtime "pycache"
[System.IO.Directory]::CreateDirectory($RuntimeTemp) | Out-Null
[System.IO.Directory]::CreateDirectory($RuntimeCache) | Out-Null
$env:TEMP = $RuntimeTemp
$env:TMP = $RuntimeTemp
$env:PYTHONPYCACHEPREFIX = $RuntimeCache

function Find-IeltsPython {
  $Candidates = @(
    $env:IELTS_PYTHON,
    (Join-Path $Runtime "venv\Scripts\python.exe")
  )

  foreach ($Name in @("python3", "python", "py")) {
    $Command = Get-Command $Name -ErrorAction SilentlyContinue
    if ($Command) { $Candidates += $Command.Source }
  }

  foreach ($Candidate in $Candidates) {
    if ([string]::IsNullOrWhiteSpace($Candidate)) { continue }
    if (Test-Path -LiteralPath $Candidate -PathType Leaf) { return $Candidate }
  }

  throw "Python 3.10+ was not found. Install Python, or set IELTS_PYTHON to its executable path."
}

$Python = Find-IeltsPython
Set-Location -LiteralPath $Root
& $Python (Join-Path $Root "run.py") @args
exit $LASTEXITCODE
