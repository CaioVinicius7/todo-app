FROM node:16.13.1

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start:dev"]