# Todo List Application

A full-stack Todo List application with Docker infrastructure setup using NGINX, Node.js, React, and PostgreSQL.

## Project Structure

```
├── backend/             # Node.js + Express backend
├── frontend/            # React + Vite frontend
├── nginx/               # NGINX reverse proxy
└── docker-compose.yml   # Docker Compose configuration
```

## Features

- Create, read, update, and delete todos
- Filter todos by status (All, Active, Completed)
- Set priority and due dates for todos
- Responsive design with Bootstrap
- Dockerized infrastructure with best practices

## Tech Stack

- **Frontend**: React, Vite, Bootstrap, Axios
- **Backend**: Node.js, Express, Sequelize
- **Database**: PostgreSQL
- **Infrastructure**: Docker, NGINX

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone this repository
2. Navigate to the project directory
3. Run the application using Docker Compose:

```bash
docker-compose up -d
```

4. Access the application at http://localhost

## Development

### Frontend

The frontend is built with React and Vite. To run it in development mode:

```bash
cd frontend
npm install
npm run dev
```

### Backend

The backend is built with Node.js and Express. To run it in development mode:

```bash
cd backend
npm install
npm run dev
```

## Docker Infrastructure

- **NGINX**: Acts as a reverse proxy, routing requests to the appropriate services
- **Frontend**: React application served by NGINX
- **Backend**: Node.js API server
- **PostgreSQL**: Database for storing todo items

## Docker Compose Best Practices

- Uses named volumes for persistent data
- Implements health checks for all services
- Properly separates networks for frontend and backend
- Restarts containers automatically on failure
- Uses environment variables for configuration
- Multi-stage builds to reduce image size

## Environment Variables

Environment variables are stored in the `.env` file. See the docker-compose.yml file for all available variables.

## License

MIT
