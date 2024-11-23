FROM node:18-alpine

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

USER app

CMD ["npm", "run", "dev"]
