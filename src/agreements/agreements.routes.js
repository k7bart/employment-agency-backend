const router = require("express").Router();
const agreementsController = require("./agreements.controller");
const { asyncWrapper } = require("../middlewares/error.middleware");

router.get("/", asyncWrapper(agreementsController.getAgreements));

router.get("/:id", asyncWrapper(agreementsController.getAgreementById));

router.post("/", asyncWrapper(agreementsController.createAgreement));

module.exports = router;
