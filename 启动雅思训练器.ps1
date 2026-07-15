$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$IndexPath = Join-Path $Root "index.html"
$ResolvedIndex = Resolve-Path -LiteralPath $IndexPath

Start-Process -FilePath $ResolvedIndex.Path
