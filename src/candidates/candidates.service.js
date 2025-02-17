const Candidate = require("../models/candidate.model");

const getCandidates = async () => {
  return Candidate.find().lean();
};

const getCandidateById = async (candidateId) => {
  const candidate = await Candidate.findById(candidateId).lean();

  // if (!category) {
  //   throw createNotFoundError()
  // }

  return candidate;
};

const createCandidate = async (data) => {
  return Candidate.create(data);
};

module.exports = {
  getCandidates,
  getCandidateById,
  createCandidate,
};
