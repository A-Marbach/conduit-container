# Conduit Docker Project

This repository contains a Docker Compose setup for running the Conduit application, including a Django backend and an Angular frontend.  
The project is designed to be easy to deploy, with persistent data storage and configurable environment variables.

## Table of Contents
- [Quickstart](#quickstart)
- [Usage](#usage)
    - [Environment Variables](#environment-variables)
    - [Volumes](#volumes)
    - [Restarting and Stopping Containers](#restarting-and-stopping-containers)
- [Extras](#extras)

## Quickstart

### Prerequisites
- Docker
- Docker Compose

### Steps
1. Clone this repository:
```bash
git clone git@github.com:A-Marbach/conduit-container.git
cd conduit-container
```
2. Initialize submodules (backend and frontend):

```bash
git submodule update --init --recursive
```
3. Copy the example environment file:

```bash
cp backend/.env.example backend/.env
```

4. Build the containers:

```bash
docker-compose build --no-cache
docker-compose up -d
```

5. Open the application in your browser:
* Frontend: http://<your_vm_ip>:8282
* Backend API: http://<your_vm_ip>:5000/admin/


## Usage

Navigate to the frontend URL to use the Conduit application.

The backend API is available at /api/.

Make sure all environment variables are correctly set before starting.

## Environment Variables

You can modify .env files or the environment: section in docker-compose.yaml for a secure deployment:

```
| Variable           | Description                       | Default                     |
|--------------------|-----------------------------------|-----------------------------|
| DJANGO_SECRET_KEY  | Django secret key                 | changeme                    |
| DATABASE_NAME      | Name of the PostgreSQL/SQLite DB  | conduit                     |
| DATABASE_USER      | Database username                 | user                        |
| DATABASE_PASSWORD  | Database password                 | password                    |
| DATABASE_HOST      | Database host                     | db                          |
| DATABASE_PORT      | Database port                     | 5432                        |
| FRONTEND_API_URL   | Backend API URL for frontend      | http://localhost:5000/api/  |
```
## Volumes

* backend_data: Stores backend data (if any persistent storage is needed)

* frontend_data: Stores frontend build files

Volumes ensure data persists even after container restarts or recreation.

### Restarting and Stopping Containers

Restart and Stopping containers:
```bash
docker-compose restart
docker-compose down
```
### Extras

* You can add additional frontend features or backend apps as needed.



> **Note:**  
> Edit the `.env` files if you want custom credentials.  
> Do **not** commit `.env` files to the repository, as they contain sensitive information.


# Trigger workflow test