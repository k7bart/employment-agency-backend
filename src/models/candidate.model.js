const { Schema, model } = require("mongoose");

const { createRequired } = require("../utils/fieldValidationUtils");

const { FIELD_CANNOT_BE_SHORTER } = require("../consts/errors");

const { MIN_NAME_LENGTH } = require("../consts/validation").lengths;

const candidateSchema = new Schema({
  firstName: {
    type: String,
    required: createRequired("first name"),
    minLength: [
      MIN_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("first name", MIN_NAME_LENGTH),
    ],
  },

  lastName: {
    type: String,
    required: createRequired("last name"),
    minLength: [
      MIN_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("last name", MIN_NAME_LENGTH),
    ],
  },

  patronymic: {
    type: String,
    minLength: [
      MIN_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("patronymic", MIN_NAME_LENGTH),
    ],
  },

  area: {
    type: Schema.Types.ObjectId,
    ref: "Area",
    required: createRequired("area"),
  },

  qualification: { type: String },

  salary: { type: Number },

  location: {
    country: {
      type: String,
      required: createRequired("country"),
    },
    flag: {
      type: String,
      required: createRequired("flag"),
    },
    city: {
      type: String,
      required: createRequired("city"),
    },
  },

  phone: {
    type: String,
    required: createRequired("phone"),
  },
});

module.exports = model("Candidate", candidateSchema);
