@echo off
cd /d "%~dp0public"
start "Cix Makarna Masa Menu" http://127.0.0.1:4173/?menu=table
start "Cix Makarna Paket Menu" http://127.0.0.1:4173/?menu=package
start "Cix Makarna Admin" http://127.0.0.1:4173/admin.html
where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 4173 --bind 127.0.0.1
) else (
  python -m http.server 4173 --bind 127.0.0.1
)
