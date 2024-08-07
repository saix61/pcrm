import express from "express";
import payload from "payload";
import path from "path";

require("dotenv").config();
const app = express();

// Настройка статических файлов для React-приложения
app.use(express.static(path.join(__dirname, "../../pcrm-front")));

// Перенаправление корня на кастомную React-страницу
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../../pcrm-front/index.html"));
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(5173);
};

start();
