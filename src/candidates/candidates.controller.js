const candidatesService = require("./candidates.service");

const getCandidates = async (_req, res) => {
  const candidates = await candidatesService.getCandidates();

  res.status(200).json(candidates);
};

const createCandidate = async (req, res) => {
  const data = req.body;

  const newCandidate = await candidatesService.createCandidate(data);

  res.status(201).json(newCandidate);
};

module.exports = {
  getCandidates,
  createCandidate,
};
