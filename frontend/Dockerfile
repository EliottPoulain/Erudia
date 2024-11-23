FROM node:18-alpine

RUN addgroup app && adduser -S -G app app

WORKDIR /front

COPY ./frontend/package*.json ./frontend/tsconfig*.json ./
COPY ./frontend/eslint.config.js ./frontend/vite.config.ts ./

RUN npm install

COPY . .

RUN chown -R app:app /front

USER app

CMD ["npm", "run", "dev"]
