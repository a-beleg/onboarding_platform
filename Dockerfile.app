FROM node:18-alpine as frontend

RUN apk update && apk add --no-cache git && apk add --no-cache yarn

WORKDIR /app

COPY package*.json ./

RUN git config --global url."https://".insteadOf git://

RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "80"]

EXPOSE 80
