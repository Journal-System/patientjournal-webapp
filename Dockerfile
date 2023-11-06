FROM node:21.1

WORKDIR /app

COPY . .

WORKDIR /app/vite-project

RUN npm install --legacy-peer-deps

EXPOSE 4000

CMD ["npm", "start"]