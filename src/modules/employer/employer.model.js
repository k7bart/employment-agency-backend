const { Schema, model } = require("mongoose");

const { createRequired } = require("../../utils/fieldValidationUtils");

const { FIELD_CANNOT_BE_SHORTER } = require("../../consts/errors");

const { MIN_NAME_LENGTH } = require("../../consts/validation").lengths;

const employerSchema = new Schema({
  name: {
    type: String,
    required: createRequired("name"),
    minLength: [
      MIN_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("employer name", MIN_NAME_LENGTH),
    ],
  },

  address: {
    country: {
      type: String,
      required: createRequired("country"),
    },
    flag: {
      type: String,
      required: createRequired("flag"),
    },
    region: {
      type: String,
    },
    city: {
      type: String,
      required: createRequired("city"),
    },
    street: {
      type: String,
      required: createRequired("street"),
    },
    house: {
      type: String,
      required: createRequired("house"),
    },
    office: { type: String },
  },

  phone: {
    type: String,
    required: createRequired("phone"),
  },
});

module.exports = model("Employer", employerSchema);
