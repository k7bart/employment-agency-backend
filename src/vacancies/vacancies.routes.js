const router = require("express").Router();
const vacanciesController = require("./vacancies.controller");

router.get("/", vacanciesController.getVacancies);

router.get("/:id", vacanciesController.getVacancyById);

router.get("/employer/:id", vacanciesController.getVacanciesByEmployerId);

router.post("/", vacanciesController.createVacancy);

module.exports = router;
