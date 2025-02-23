const router = require("express").Router();
const { asyncWrapper } = require("../middlewares/error.middleware");
const candidatesController = require("./candidates.controller");

router
  .route("/")
  .get(asyncWrapper(candidatesController.getCandidates))
  .post(asyncWrapper(candidatesController.createCandidate));

router.get(
  "/suitable",
  asyncWrapper(candidatesController.getSuitableCandidates)
);

router.get(
  "/search/name",
  asyncWrapper(candidatesController.getCandidateIdByFirstAndLastName)
);

router.get(
  "/candidate/:id",
  asyncWrapper(candidatesController.getCandidateById)
);

module.exports = router;
