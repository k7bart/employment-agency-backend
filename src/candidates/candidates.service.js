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

const getCandidateIdByFirstAndLastName = async (firstName, lastName) => {
  const candidate = await Candidate.findOne({ firstName, lastName }).lean();

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
  const query = { area: areaId };

  if (country) query["location.country"] = country;
  if (city) query["location.city"] = city;

  if (minSalary || maxSalary) {
    query.salary = {};
    if (minSalary) query.salary.$gte = minSalary;
    if (maxSalary) query.salary.$lte = maxSalary;
  }

  return Candidate.find(query).populate("area").lean();
};

const createCandidate = async (data) => {
  return Candidate.create(data);
};

module.exports = {
  getCandidates,
  getCandidateById,
  getCandidateIdByFirstAndLastName,
  getSuitableCandidates,
  createCandidate,
};
