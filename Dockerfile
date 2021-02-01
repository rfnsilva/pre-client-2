FROM node:alpine

WORKDIR /frontend

COPY package*.json ./
COPY tsconfig*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]
