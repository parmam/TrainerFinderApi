FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY src ./src/

RUN yarn install --frozen-lockfile
RUN yarn prisma generate
RUN yarn build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

RUN yarn install --frozen-lockfile --production
RUN yarn prisma generate

EXPOSE 3000

CMD ["yarn", "start:prod"] 