const Area = require("./area.model");

const getAreas = async () => {
  return Area.find().lean();
};

const createArea = async (data) => {
  return Area.create(data);
};

module.exports = {
  getAreas,
  createArea,
};
