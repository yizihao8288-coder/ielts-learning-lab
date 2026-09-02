$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$ServerScript = Join-Path $Root "serve-ielts.ps1"

& $ServerScript
exit $LASTEXITCODE
