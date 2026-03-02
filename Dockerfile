# Stage 1 - builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2 - production
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/src ./src
COPY --from=builder /app/index.js .
EXPOSE 3001
CMD ["node", "index.js"]