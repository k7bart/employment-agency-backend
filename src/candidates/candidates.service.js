const Candidate = require("../models/candidate.model");

const getCandidates = async () => {
  return Candidate.find().lean();
};

const createCandidate = async (data) => {
  return Candidate.create(data);
};

module.exports = {
  getCandidates,
  createCandidate,
};
