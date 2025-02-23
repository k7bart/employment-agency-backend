const router = require("express").Router();
const agreementsController = require("./agreements.controller");
const { asyncWrapper } = require("../middlewares/error.middleware");

router
  .route("/")
  .get(asyncWrapper(agreementsController.getAgreements))
  .post(asyncWrapper(agreementsController.createAgreement));

router.get("/:id", asyncWrapper(agreementsController.getAgreementById));

module.exports = router;
