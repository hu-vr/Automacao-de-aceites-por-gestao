@echo off
cd /d "%~dp0"
call ".venv\Scripts\activate.bat"
python "Automação aceites\meu_email.py"
pause
