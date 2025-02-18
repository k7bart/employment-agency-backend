const Candidate = require("../models/candidate.model");
const { createNotFoundError } = require("../utils/errorsUtils");

const getCandidates = async () => {
  return Candidate.find().populate("area").lean();
};

const getCandidateById = async (candidateId) => {
  const candidate = await Candidate.findById(candidateId)
    .populate("area")
    .lean();

  if (!candidate) {
    throw createNotFoundError();
  }

  return candidate;
};

const getSuitableCandidates = async (
  areaId,
  country,
  city,
  minSalary,
  maxSalary
) => {
  const query = {
    area: areaId,
    "location.country": country,
    "location.city": city,
  };

  const salary = {
    ...(minSalary && { $gte: minSalary }),
    ...(maxSalary && { $lte: maxSalary }),
  };

  if (Object.keys(salary).length) query.salary = salary;

  return await Candidate.find(query).populate("area").lean();
};

const createCandidate = async (data) => {
  return Candidate.create(data);
};

module.exports = {
  getCandidates,
  getCandidateById,
  getSuitableCandidates,
  createCandidate,
};
