const { Schema, model } = require("mongoose");

const { createRequired } = require("../utils/fieldValidationUtils");

const agreementSchema = new Schema({
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: createRequired("candidate"),
  },

  vacancy: {
    type: Schema.Types.ObjectId,
    ref: "Vacancy",
    required: createRequired("vacancy"),
  },

  commission: {
    type: Number,
    required: createRequired("commission"),
    min: [0, "Commission must be a positive number"],
  },
});

agreementSchema.index({ candidate: 1, vacancy: 1 });

module.exports = model("Agreement", agreementSchema);
