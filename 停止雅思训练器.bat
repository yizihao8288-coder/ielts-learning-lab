@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Stop IELTS Trainer

echo Stopping IELTS vocabulary trainer server...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0停止雅思训练器.ps1"
echo Done.
timeout /t 2 >nul
