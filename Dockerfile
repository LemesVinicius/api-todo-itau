FROM node:11-alpine AS builder

WORKDIR /opt/app

COPY package.json package-lock.json* ./

RUN npm cache clean --force && npm install

COPY . /opt/app

RUN npm run build

FROM node:11-alpine

WORKDIR /opt/app

RUN mkdir build

COPY --from=builder /opt/app/build /opt/app/build

EXPOSE 3000

EXPOSE 27017

WORKDIR /opt/app/build

ENTRYPOINT node server.js