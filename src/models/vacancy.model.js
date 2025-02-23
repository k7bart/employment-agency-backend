const { Schema, model } = require("mongoose");

const { createRequired } = require("../utils/fieldValidationUtils");

const vacancySchema = new Schema({
  title: {
    type: String,
    required: createRequired("title"),
  },

  employer: {
    type: Schema.Types.ObjectId,
    ref: "Employer",
    required: createRequired("employer"),
  },

  area: {
    type: Schema.Types.ObjectId,
    ref: "Area",
    required: createRequired("area"),
  },

  maxSalary: { type: Number },

  minSalary: { type: Number },

  location: {
    country: {
      type: String,
    },
    flag: {
      type: String,
    },
    city: {
      type: String,
    },
  },
});

const Vacancy = model("Vacancy", vacancySchema);

module.exports = Vacancy;
