const agreementsService = require("./agreement.service");

const getAgreements = async (_req, res) => {
  const agreements = await agreementsService.getAgreements();

  res.status(200).json(agreements);
};

const getAgreementById = async (req, res) => {
  const { id } = req.params;

  const agreement = await agreementsService.getAgreementById(id);

  res.status(200).json(agreement);
};

const createAgreement = async (req, res) => {
  const data = req.body;

  const newAgreement = await agreementsService.createAgreement(data);

  res.status(201).json(newAgreement);
};

module.exports = {
  getAgreements,
  getAgreementById,
  createAgreement,
};
