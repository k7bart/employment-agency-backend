const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,

  JWT_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,

  CLIENT_URL: process.env.CLIENT_URL,
  SERVER_URL: process.env.SERVER_URL,
  SERVER_PORT: process.env.SERVER_PORT,
};
