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

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Build the application (optional, depends on your setup)
COPY . .
RUN npm run build

# Copy only necessary files from the development stage (optional)
COPY --from=development /app/dist ./dist

# Use npm run start for production mode
CMD ["npm", "run", "start"]
