FROM node:14

RUN mkdir /app
WORKDIR /app

COPY ./package*.json ./

RUN npm install
RUN npm install -g http-server

COPY . .

RUN npm run build
EXPOSE 8081

CMD ["http-server", "dist"]