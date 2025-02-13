const { FIELD_CANNOT_BE_EMPTY } = require("../consts/errors");

const createRequired = (field) => [true, FIELD_CANNOT_BE_EMPTY(field)];

module.exports = { createRequired };
