
# MORENT Backend Services

This repository contains the backend services for the MORENT Car Rental Web App, developed using [NestJS](https://nestjs.com/). The backend provides additional functionalities and APIs to complement the **Directus Headless CMS**.

## Features

- **NestJS Framework**: Modular and scalable Node.js framework.
- **RESTful APIs**: Extends and customizes backend functionalities.
- **Integration with Directus**: Seamlessly integrates with the Directus CMS.
- **Dockerized Setup**: Simplifies deployment with Docker.

---

## Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/BorenMon/morent-service.git
   cd morent-service
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   - Copy `.env.example` to `.env`:  
     ```bash
     cp .env.example .env
     ```
   - Fill in the required values in the `.env` file.

4. **Run the Application**  
   - For development:
     ```bash
     npm run start:dev
     ```
   - For production:
     ```bash
     npm run build
     npm run start:prod
     ```

5. **Docker Setup**  
   Alternatively, you can run the application using Docker:
   ```bash
   docker compose up -d
   ```

---

## Scripts

- **Development**: `npm run start:dev`
- **Build**: `npm run build`
- **Production**: `npm run start:prod`
- **Linting**: `npm run lint`

---

## Notes

- Ensure the environment variables are correctly set before running the application.
- Use the provided Docker setup for consistent environments.
