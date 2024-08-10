# Base stage for common dependencies
FROM node:18.8-alpine as base
WORKDIR /home/node/pcrm-admin
COPY package*.json ./
COPY yarn.lock ./

# Builder stage to install dependencies and build the app
FROM base as builder
COPY . .
RUN yarn install
RUN yarn build

# Runtime stage for the final image
FROM base as runtime

COPY --from=builder /home/node/pcrm-admin/dist ./dist
COPY --from=builder /home/node/pcrm-admin/build ./build

COPY .env.dockercompose ./.env

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

RUN yarn install --production

USER node
EXPOSE 3100
CMD ["node", "dist/server.js"]