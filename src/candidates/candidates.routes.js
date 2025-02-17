const router = require("express").Router();
const candidatesController = require("./candidates.controller");

router.get("/", candidatesController.getCandidates);

router.get("/:id", candidatesController.getCandidateById);

router.post("/", candidatesController.createCandidate);

module.exports = router;
