FROM node:18.15.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npx", "serve", "dist", "-l", "8080"]
