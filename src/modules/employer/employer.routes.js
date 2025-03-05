const router = require("express").Router();
const { asyncWrapper } = require("../../middlewares/error.middleware");
const employersController = require("./employer.controller");

router
  .route("/")
  .get(asyncWrapper(employersController.getEmployers))
  .post(asyncWrapper(employersController.createEmployer));

router.get("/:id", asyncWrapper(employersController.getEmployerById));

module.exports = router;
