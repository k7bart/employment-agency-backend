const { SERVER_URL } = require("./config");

const swagger = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API for the Employment Agency",
      version: "1.0.0",
      description: "Employment Agency REST API",
    },
    servers: [
      {
        url: SERVER_URL,
      },
    ],
  },
  apis: ["./docs/**/*.yaml"],
};

module.exports = swagger;
