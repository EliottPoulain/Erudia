FROM node:18-alpine

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY ./backend/package*.json ./backend/tsconfig.json ./

RUN npm install

COPY . .

USER app

CMD ["npm", "run", "dev"]
