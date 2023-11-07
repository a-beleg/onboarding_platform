FROM node:18-alpine as frontend

RUN apk update && apk add --no-cache git && apk add --no-cache yarn

WORKDIR /app

COPY package*.json ./

RUN git config --global url."https://".insteadOf git://

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=frontend /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/app.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
