const { Schema, model } = require("mongoose");
const { isValidPhoneNumber } = require("libphonenumber-js");
const {
  createRequiredFieldValidator,
} = require("../utils/fieldValidationUtils");

const {
  FIELD_CANNOT_BE_SHORTER,
  FIELD_IS_NOT_OF_PROPER_FORMAT,
} = require("../consts/errors");

const { MIN_EMPLOYER_NAME_LENGTH } = require("../consts/validation").lengths;

const employerSchema = new Schema({
  name: {
    type: String,
    required: createRequiredFieldValidator("name"),
    minLength: [
      MIN_EMPLOYER_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("name", MIN_EMPLOYER_NAME_LENGTH),
    ],
  },

  area: {
    type: Schema.Types.ObjectId,
    ref: "Area",
    required: createRequiredFieldValidator("area"),
  },

  address: {
    type: {
      country: {
        type: String,
        required: createRequiredFieldValidator("country"),
      },
      region: { type: String },
      city: {
        type: String,
        required: createRequiredFieldValidator("city"),
      },
      street: {
        type: String,
        required: createRequiredFieldValidator("street"),
      },
      house: {
        type: String,
        required: createRequiredFieldValidator("house"),
      },
      office: { type: String },
    },
    required: createRequiredFieldValidator("address"),
  },

  phone: {
    type: String,
    required: createRequiredFieldValidator("phone"),
    validate: {
      validator: (v) => isValidPhoneNumber(v),
      message: FIELD_IS_NOT_OF_PROPER_FORMAT("phone"),
    },
  },
});

module.exports = model("Employer", employerSchema);
