const Vacancy = require("../models/vacancy.model");
const { createNotFoundError } = require("../utils/errorsUtils");

const getSuitableVacancies = async (areaId, country, city, salary) => {
  const query = {
    area: areaId,
    $or: [
      { "location.country": country, "location.city": city },
      { location: { $exists: false } },
    ],
  };

  if (salary) {
    const salaryConditions = [
      {
        $and: [
          { minSalary: { $lte: salary } },
          { maxSalary: { $gte: salary } },
        ],
      },
      { minSalary: { $exists: false }, maxSalary: { $exists: false } },
      {
        $and: [
          { minSalary: { $lte: salary } },
          { maxSalary: { $exists: false } },
        ],
      },
      {
        $and: [
          { minSalary: { $exists: false } },
          { maxSalary: { $gte: salary } },
        ],
      },
    ];

    query.$and = [{ $or: salaryConditions }];
  }

  return Vacancy.find(query).populate("area employer").lean();
};

const getVacancies = async () => {
  return Vacancy.find().populate("area employer").lean();
};

const getVacancyById = async (vacancyId) => {
  const vacancy = await Vacancy.findById(vacancyId)
    .populate("area employer")
    .lean();

  if (!vacancy) {
    throw createNotFoundError();
  }

  return vacancy;
};

const getVacanciesByEmployerId = async (employerId) => {
  return Vacancy.find({ employer: employerId })
    .populate("area employer")
    .lean();
};

const createVacancy = async (data) => {
  return Vacancy.create(data);
};

module.exports = {
  getSuitableVacancies,
  getVacancies,
  getVacancyById,
  getVacanciesByEmployerId,
  createVacancy,
};
