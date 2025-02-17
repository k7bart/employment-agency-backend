const router = require("express").Router();
const agreementsController = require("./agreements.controller");

router.get("/", agreementsController.getAgreements);

router.get("/:id", agreementsController.getAgreementById);

router.post("/", agreementsController.createAgreement);

module.exports = router;
