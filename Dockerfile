# # Use the official Node.js 20.11 Alpine image as a base
# FROM node:20.11-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Copy package.json and lock files
# COPY package.json package-lock.json* ./

# RUN npm ci

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# # Copy the entire application directory
# COPY . .
# COPY .env

# # Install TypeScript as a development dependency
# RUN npm install --save-dev typescript

# # Build the application
# RUN npm run build

# # Production image, copy built files and run server
# FROM base AS runner
# WORKDIR /app

# COPY --from=builder /app/public ./public

# # Copy built files from the builder stage
# COPY --from=builder /app/dist ./dist

# # Install serve to run the production server
# RUN npm install -g serve

# EXPOSE 3000
# ENV HOSTNAME "0.0.0.0"

# # Start the server
# CMD ["serve", "-s", "dist"]


# build stage
FROM node:20.11-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
