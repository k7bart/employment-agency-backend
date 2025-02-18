const Vacancy = require("../models/vacancy.model");
const { createNotFoundError } = require("../utils/errorsUtils");

const getVacancies = async () => {
  return Vacancy.find().populate("employer").lean();
};

const getVacancyById = async (vacancyId) => {
  const vacancy = await Vacancy.findById(vacancyId).populate("employer").lean();

  if (!vacancy) {
    throw createNotFoundError();
  }

  return vacancy;
};

const getVacanciesByEmployerId = async (employerId) => {
  return Vacancy.find({ employer: employerId }).populate("employer").lean();
};

const createVacancy = async (data) => {
  return Vacancy.create(data).lean();
};

module.exports = {
  getVacancies,
  getVacancyById,
  getVacanciesByEmployerId,
  createVacancy,
};
