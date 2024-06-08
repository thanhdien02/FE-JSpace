# Use the official Node.js 20.11 Alpine image as a base
FROM node:20.11-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json and lock files
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy the entire application directory
COPY . .

# Install TypeScript as a development dependency
RUN npm install --save-dev typescript

# Build the application
RUN npm run build

# Production image, copy built files and run server
FROM node:20.11-alpine AS runner
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/build ./build

# Install serve to run the production server
RUN npm install -g serve

EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build"]
