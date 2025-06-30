FROM node:22-alpine

run apk update && apk add --no-cache bash
# RUN npm install -g npm@latest
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
