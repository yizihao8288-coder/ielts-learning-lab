@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Open IELTS Trainer

echo Opening IELTS vocabulary trainer...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0启动雅思训练器.ps1"
if errorlevel 1 pause
