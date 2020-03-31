FROM node:latest

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY .  /app

EXPOSE 8888

ENTRYPOINT ["node", "index.js"]