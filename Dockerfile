FROM node:13.3.0 AS compile-image

# set working directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:production

FROM nginx

COPY --from=build /app/dist/out/ /usr/share/nginx/html

COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
