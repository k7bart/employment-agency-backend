const candidatesService = require("./candidate.service");

const getCandidates = async (_req, res) => {
  const candidates = await candidatesService.getCandidates();

  res.status(200).json(candidates);
};

const getCandidateById = async (req, res) => {
  const { id } = req.params;

  const candidate = await candidatesService.getCandidateById(id);

  res.status(200).json(candidate);
};

const getCandidateIdByFirstAndLastName = async (req, res) => {
  const { firstName, lastName } = req.query;

  const candidate = await candidatesService.getCandidateIdByFirstAndLastName(
    firstName,
    lastName
  );

  res.status(200).json(candidate);
};

const getSuitableCandidates = async (req, res) => {
  const { areaId, country, city, minSalary, maxSalary } = req.query;

  const candidates = await candidatesService.getSuitableCandidates(
    areaId,
    country,
    city,
    minSalary,
    maxSalary
  );

  res.status(200).json(candidates);
};

const createCandidate = async (req, res) => {
  const data = req.body;

  const newCandidate = await candidatesService.createCandidate(data);

  res.status(201).json(newCandidate);
};

module.exports = {
  getCandidates,
  getCandidateById,
  getCandidateIdByFirstAndLastName,
  getSuitableCandidates,
  createCandidate,
};
