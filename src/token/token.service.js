const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_EXPIRES_IN } = require("../../config");

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return token;
};

module.exports = { generateToken };
