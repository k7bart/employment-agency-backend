const { INTERNAL_SERVER_ERROR } = require("../consts/errors");

const errorMiddleware = (err, _req, res, _next) => {
  const { status = 500, code = INTERNAL_SERVER_ERROR.code, message } = err;
  res.status(status).json({ status, code, message });
};

module.exports = errorMiddleware;
