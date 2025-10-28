# FROM python:3.6-slim
# WORKDIR /app
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# COPY . .
# EXPOSE 5000
# CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "conduit.wsgi:application"]


FROM python:3.6-slim

# Setze Arbeitsverzeichnis
WORKDIR /app

# Installiere Systemabhängigkeiten (sqlite3 wird für Django benötigt)
RUN apt-get update && apt-get install -y sqlite3 && apt-get clean

# Kopiere Requirements und installiere Python-Abhängigkeiten
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Kopiere restliche App-Dateien
COPY . .

# Exponiere den Port für Gunicorn
EXPOSE 5000

# Starte Gunicorn mit 4 Workern (für dein Backend)
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "conduit.wsgi:application"]
