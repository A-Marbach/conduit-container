# Conduit Docker Project

This repository contains a Docker Compose setup for running the Conduit application, including a Django backend and an Angular frontend.  
The project is designed to be easy to deploy, with persistent data storage and configurable environment variables.

## Table of Contents
- [Quickstart](#quickstart)
- [Usage](#usage)
    - [Environment Variables](#environment-variables)
    - [Volumes](#volumes)
    - [Restarting and Stopping Containers](#restarting-and-stopping-containers)
- [Security](#security)
- [GitHub Actions Workflow](#github-actions-workflow)
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
## Security
* Do not commit .env files, SSH keys, passwords, or any sensitive information to the repository.
* Do not include IP addresses or credentials in the frontend code.


### GitHub Actions Workflow

The deployment workflow is defined in `.github/workflows/deployment.yaml`.  
It handles:

- SSH connection to the VM using repository secrets
- Pulling the latest code from the branch
- Building and starting containers via Docker Compose in detached mode
- Stopping the workflow if any step fails

> **Note:** Make sure this file is committed to the repository, otherwise GitHub Actions will not be able to run the workflow.


### Extras

* You can add additional frontend features or backend apps as needed.



> **Note:**  
> Edit the `.env` files if you want custom credentials.  
> Do **not** commit `.env` files to the repository, as they contain sensitive information.


# Trigger workflow test

test