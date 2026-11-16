# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app

# Vite embebe las variables VITE_* en tiempo de build.
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
