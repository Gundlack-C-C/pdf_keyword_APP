FROM node:current-slim as build

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

RUN npm run build -- --base-href=/keyword-app/ --deploy-url=/keyword-app/

FROM nginx:1.21.1-alpine

COPY --from=build /usr/src/app/dist/PDF-APP-FRONTEND /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]