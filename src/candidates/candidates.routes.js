const router = require("express").Router();
const candidatesController = require("./candidates.controller");

router
  .route("/")
  .get(candidatesController.getCandidates)
  .post(candidatesController.createCandidate);

router.get("/suitable", candidatesController.getSuitableCandidates);

router.get("/candidate/:id", candidatesController.getCandidateById);

module.exports = router;
