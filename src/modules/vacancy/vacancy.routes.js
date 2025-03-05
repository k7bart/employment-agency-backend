const router = require("express").Router();
const { asyncWrapper } = require("../../middlewares/error.middleware");
const vacanciesController = require("./vacancy.controller");

router
  .route("/")
  .get(asyncWrapper(vacanciesController.getVacancies))
  .post(asyncWrapper(vacanciesController.createVacancy));

router.get("/suitable", asyncWrapper(vacanciesController.getSuitableVacancies));

router.get("/vacancy/:id", asyncWrapper(vacanciesController.getVacancyById));

router.get(
  "/employer/:id",
  asyncWrapper(vacanciesController.getVacanciesByEmployerId)
);

module.exports = router;
