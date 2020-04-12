FROM node:12.16-alpine

ENV NODE_VERSION 12.16.1

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]