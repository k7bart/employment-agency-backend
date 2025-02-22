const router = require("express").Router();
const vacanciesController = require("./vacancies.controller");

router
  .route("/")
  .get(vacanciesController.getVacancies)
  .post(vacanciesController.createVacancy);

router.get("/suitable", vacanciesController.getSuitableVacancies);

router.get("/vacancy/:id", vacanciesController.getVacancyById);

router.get("/employer/:id", vacanciesController.getVacanciesByEmployerId);

module.exports = router;
