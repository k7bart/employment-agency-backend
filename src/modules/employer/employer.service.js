const Employer = require("./employer.model");
const { createNotFoundError } = require("../../utils/errorsUtils");

const getEmployers = async () => {
  return Employer.find().lean();
};

const getEmployerById = async (employerId) => {
  const employer = await Employer.findById(employerId).lean();

  if (!employer) {
    throw createNotFoundError();
  }

  return employer;
};

const createEmployer = async (data) => {
  return Employer.create(data).lean();
};

module.exports = {
  getEmployers,
  getEmployerById,
  createEmployer,
};
