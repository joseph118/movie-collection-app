FROM node:latest AS node

# set working directory
WORKDIR /app

# Copy and set environment to build
COPY . .

RUN npm install
RUN npm run build:production


FROM nginx:alpine

## Add configuration to serve SPA
COPY /nginx.conf /etc/nginx/conf.d/default.conf

## Copy artifacts to destination
COPY --from=node /app/dist /usr/share/nginx/html
