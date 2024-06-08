FROM node:18-alpine
WORKDIR /app

COPY package*.json ./

RUN apk update && apk add --no-cache xsel
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000
ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["serve", "-s", "build", "-l", "3000"]
