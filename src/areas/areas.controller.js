const areasService = require("./areas.service");

const getAreas = async (_req, res) => {
  const areas = await areasService.getAreas();

  res.status(200).json(areas);
};

const createArea = async (req, res) => {
  const data = req.body;

  const newArea = await areasService.createArea(data);

  res.status(201).json(newArea);
};

module.exports = {
  getAreas,
  createArea,
};
