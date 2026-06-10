@echo off
chcp 65001 >nul
cd /d "%~dp0"
title IELTS Listening Trainer
echo IELTS Listening Trainer local server
echo.
echo Keep this window open while using the trainer.
echo URL: http://127.0.0.1:8765/index.html
echo.
start "" "http://127.0.0.1:8765/index.html"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve-ielts.ps1"
pause
