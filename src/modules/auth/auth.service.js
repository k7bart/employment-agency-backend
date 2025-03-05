const tokenService = require("../token/token.service");
const userService = require("../user/user.service");

const { createError } = require("../../utils/errorsUtils");

const { INCORRECT_CREDENTIALS } = require("../../consts/errors");

const login = async (email, password) => {
  const user = await userService.getUserByEmailWithPassword(email);

  if (!user || !(await user.comparePasswords(password, user.password))) {
    throw createError(401, INCORRECT_CREDENTIALS);
  }

  const token = tokenService.generateToken({
    email: user.email,
    id: user._id,
  });

  return token;
};

const signup = async (email, password) => {
  const user = await userService.createUser(email, password);

  const token = tokenService.generateToken({
    email: user.email,
    id: user._id,
  });

  return token;
};

module.exports = {
  login,
  signup,
};
