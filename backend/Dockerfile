FROM node:18-alpine

# Install netcat for the wait-for-it script
RUN apk add --no-cache netcat-openbsd

WORKDIR /app

COPY package*.json ./
COPY wait-for-it.sh ./

RUN npm install
RUN chmod +x wait-for-it.sh

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "./wait-for-it.sh postgres 5432 && npm start"]
