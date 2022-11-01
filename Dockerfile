FROM node:14

RUN mkdir /app
WORKDIR /app

COPY ./package*.json ./

RUN npm install
RUN  npm install -g serve@13.0.4

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["serve", "-s", "dist"]