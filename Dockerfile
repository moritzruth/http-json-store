FROM node:15.8.0-alpine3.13

COPY index.js package.json yarn.lock /app/
WORKDIR /app
RUN yarn

EXPOSE 3000/tcp
EXPOSE 3000/udp

ENV HOST=0.0.0.0

ENTRYPOINT yarn start
