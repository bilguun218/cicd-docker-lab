FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev


FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000
ENV APP_NAME="CI/CD Docker Backend"

COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY server.js ./

EXPOSE 5000

CMD ["node", "server.js"]
