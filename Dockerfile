FROM node:16

WORKDIR usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build:ssr
CMD ["npm", "run", "start"]