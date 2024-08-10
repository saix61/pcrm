FROM node:alpine as base
WORKDIR /home/node/pcrm-front
COPY ./pcrm-front/package*.json ./

FROM base as builder

RUN npm ci
COPY ./pcrm-front/. .
COPY payload-types.d.ts ../
RUN npm run build

FROM base as runtime

COPY --from=builder /home/node/pcrm-front/dist ./dist
RUN npm install -g serve

ENV PORT=5173
EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
