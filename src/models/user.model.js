const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const { createRequired } = require("../utils/fieldValidationUtils");

const { FIELD_CANNOT_BE_SHORTER } = require("../consts/errors");

const { MIN_PASSWORD_LENGTH } = require("../consts/validation").lengths;

const userSchema = new Schema({
  email: {
    type: String,
    required: createRequired("email"),
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: createRequired("password"),
    minLength: [
      MIN_PASSWORD_LENGTH,
      FIELD_CANNOT_BE_SHORTER("password", MIN_PASSWORD_LENGTH),
    ],
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePasswords = async function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

module.exports = model("User", userSchema);
