const { Schema, model } = require("mongoose");

const { createRequired } = require("../utils/fieldValidationUtils");

const {
  FIELD_CANNOT_BE_SHORTER,
  FIELD_CANNOT_BE_LONGER,
} = require("../consts/errors");

const { MIN_NAME_LENGTH, MAX_AREA_NAME_LENGTH } =
  require("../consts/validation").lengths;

const areaSchema = new Schema({
  name: {
    type: String,
    required: createRequired("name"),
    minLength: [
      MIN_NAME_LENGTH,
      FIELD_CANNOT_BE_SHORTER("area name", MIN_NAME_LENGTH),
    ],
    maxLength: [
      MAX_AREA_NAME_LENGTH,
      FIELD_CANNOT_BE_LONGER("area name", MAX_AREA_NAME_LENGTH),
    ],
  },
});

module.exports = model("Area", areaSchema);
