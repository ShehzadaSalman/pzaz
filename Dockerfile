FROM node:18-slim
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
COPY serve.json ./dist/serve.json
CMD ["npx", "serve", "dist", "-l", "8080", "-c", "serve.json"]
