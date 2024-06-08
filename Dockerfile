# FROM node:18-alpine
# WORKDIR /app

# COPY package*.json ./

# RUN apk update && apk add --no-cache xsel
# RUN npm install

# COPY . .

# RUN npm run build

# RUN npm install -g serve

# EXPOSE 3000
# ENV PORT 3000
# # set hostname to localhost
# ENV HOSTNAME "0.0.0.0"

# CMD ["serve", "-s", "build", "-l", "3000"]


# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
