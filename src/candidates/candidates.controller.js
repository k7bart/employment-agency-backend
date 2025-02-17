const candidatesService = require("./candidates.service");

const getCandidates = async (_req, res) => {
  const candidates = await candidatesService.getCandidates();

  res.status(200).json(candidates);
};

const getCandidateById = async (req, res) => {
  const { id } = req.params;

  const candidate = await candidatesService.getCandidateById(id);

  res.status(200).json(candidate);
};

const createCandidate = async (req, res) => {
  const data = req.body;

  const newCandidate = await candidatesService.createCandidate(data);

  res.status(201).json(newCandidate);
};

module.exports = {
  getCandidates,
  getCandidateById,
  createCandidate,
};
