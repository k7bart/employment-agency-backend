const User = require("./user.model");

const { ALREADY_REGISTERED } = require("../../consts/errors");

const { createError, createNotFoundError } = require("../../utils/errorsUtils");

const createUser = async (email, password) => {
  const duplicateUser = await getUserByEmail(email);

  if (duplicateUser) {
    throw createError(409, ALREADY_REGISTERED);
  }

  return await User.create({
    email,
    password,
  });
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email }).lean();

  return user || null;
};

const getUserByEmailWithPassword = async (email) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw createNotFoundError();
  }

  return user;
};

module.exports = {
  createUser,
  getUserByEmailWithPassword,
};
