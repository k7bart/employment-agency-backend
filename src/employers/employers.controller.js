const employersService = require("./employers.service");

const getEmployers = async (_req, res) => {
  const employers = await employersService.getEmployers();

  res.status(200).json(employers);
};

const getEmployerById = async (req, res) => {
  const { id } = req.params;

  const employer = await employersService.getEmployerById(id);

  res.status(200).json(employer);
};

const createEmployer = async (req, res) => {
  const data = req.body;

  const newEmployer = await employersService.createEmployer(data);

  res.status(201).json(newEmployer);
};

module.exports = {
  getEmployers,
  getEmployerById,
  createEmployer,
};
