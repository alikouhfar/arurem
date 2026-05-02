# ---- Build stage ----
FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

COPY . .

RUN bun run build

# ---- Runtime stage ----
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]