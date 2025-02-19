const router = require("express").Router();
const areasController = require("./areas.controller");

router
  .route("/")
  .get(areasController.getAreas)
  .post(areasController.createArea);

module.exports = router;
