@echo off
title Charter Premium - Local Server
set "PATH=C:\Users\Marketing\AppData\Local\Programs\nodejs;%PATH%"
cd /d "%~dp0"

echo ==========================================
echo Starting Charter Premium Local Server...
echo ==========================================

start "" http://localhost:3000
npm run dev
pause
