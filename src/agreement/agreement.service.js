const Agreement = require("../models/agreement.model");

const { createNotFoundError } = require("../utils/errorsUtils");

const getAgreements = async () => {
  return Agreement.find()
    .populate("candidate")
    .populate({
      path: "vacancy",
      populate: {
        path: "area employer",
      },
    })
    .lean();
};

const getAgreementById = async (agreementId) => {
  const agreement = await Agreement.findById(agreementId)
    .populate("candidate")
    .populate({
      path: "vacancy",
      populate: {
        path: "area employer",
      },
    })
    .lean();

  if (!agreement) {
    throw createNotFoundError();
  }

  return agreement;
};

const createAgreement = async (data) => {
  return Agreement.create(data);
};

module.exports = {
  getAgreements,
  getAgreementById,
  createAgreement,
};
