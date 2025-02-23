const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../../config");

const { createUnauthorizedError } = require("../utils/errorsUtils");

const checkAuth = (req, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    throw createUnauthorizedError();
  }
};
module.exports = { checkAuth };
