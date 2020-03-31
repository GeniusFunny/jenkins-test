FROM node:10.16.3
ADD index.js /index.js
ENTRYPOINT ["node", "index.js"]