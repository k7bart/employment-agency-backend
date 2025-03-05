const jwt = require("jsonwebtoken");

const {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_EXPIRES_IN_SEC,
} = require("../../../config");

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return { token, expiresIn: JWT_EXPIRES_IN_SEC };
};

module.exports = { generateToken };
