# Development Stage
FROM node:18 AS development

WORKDIR /app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Use npm run start:dev for development mode
CMD ["npm", "run", "start:dev"]

# Production Stage
FROM node:18 AS production

WORKDIR /app

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the source code and build
COPY . .
RUN nest build

# Use npm run start for production mode
CMD ["npm", "run", "start"]
