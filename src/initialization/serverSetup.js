const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const router = require("../router");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const {
  MONGODB_URL,
  MONGODB_USER,
  MONGODB_PASSWORD,
  SERVER_PORT,
  CLIENT_URL,
} = require("../../config");

const swaggerOptions = require("../../swagger-settings");

const serverSetup = async (app) => {
  const DB = MONGODB_URL.replace("<USER>", MONGODB_USER).replace(
    "<PASSWORD>",
    MONGODB_PASSWORD
  );

  await mongoose
    .connect(DB)
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.error("DB connection error:", err));

  app.use(express.json());

  app.use(
    cors({
      origin: CLIENT_URL,
    })
  );

  const swaggerSettings = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSettings));

  app.use("/", router);

  return app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });
};

module.exports = serverSetup;
