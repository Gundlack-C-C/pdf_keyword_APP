FROM node:current-slim as build

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:1.21.1-alpine

COPY --from=build /usr/src/app/dist/PDF-APP-FRONTEND /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80