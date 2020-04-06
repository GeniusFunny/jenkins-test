FROM node:latest

ADD  index.js /index.js

ENTRYPOINT ["node", "index.js"]