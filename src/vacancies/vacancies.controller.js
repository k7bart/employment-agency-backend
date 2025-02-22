const vacanciesService = require("./vacancies.service");

const getSuitableVacancies = async (req, res) => {
  const { areaId, country, city, salary } = req.query;

  const vacancies = await vacanciesService.getSuitableVacancies(
    areaId,
    country,
    city,
    salary
  );

  res.status(200).json(vacancies);
};

const getVacancies = async (_req, res) => {
  const vacancies = await vacanciesService.getVacancies();

  res.status(200).json(vacancies);
};

const getVacancyById = async (req, res) => {
  const { id } = req.params;

  const vacancy = await vacanciesService.getVacancyById(id);

  res.status(200).json(vacancy);
};

const getVacanciesByEmployerId = async (req, res) => {
  const { id } = req.params;

  const vacancies = await vacanciesService.getVacanciesByEmployerId(id);

  res.status(200).json(vacancies);
};

const createVacancy = async (req, res) => {
  const data = req.body;

  const newVacancy = await vacanciesService.createVacancy(data);

  res.status(201).json(newVacancy);
};

module.exports = {
  getSuitableVacancies,
  getVacancies,
  getVacancyById,
  getVacanciesByEmployerId,
  createVacancy,
};
