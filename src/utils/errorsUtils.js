const { NOT_FOUND, UNAUTHORIZED } = require("../consts/errors");

const createError = (status, errorInfo) => {
  const err = new Error(errorInfo.message);
  err.status = status;
  err.code = errorInfo.code;

  return err;
};

const createNotFoundError = () => {
  return createError(404, NOT_FOUND);
};

const createUnauthorizedError = () => {
  return createError(401, UNAUTHORIZED);
};

module.exports = {
  createError,
  createNotFoundError,
  createUnauthorizedError,
};
