const router = require("express").Router();
const { asyncWrapper } = require("../../middlewares/error.middleware");
const areasController = require("./area.controller");

router
  .route("/")
  .get(asyncWrapper(areasController.getAreas))
  .post(asyncWrapper(areasController.createArea));

module.exports = router;
