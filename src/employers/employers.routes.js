const router = require("express").Router();
const { asyncWrapper } = require("../middlewares/error.middleware");
const employersController = require("./employers.controller");

router.get("/", asyncWrapper(employersController.getEmployers));

router.get("/:id", asyncWrapper(employersController.getEmployerById));

router.post("/", asyncWrapper(employersController.createEmployer));

module.exports = router;
