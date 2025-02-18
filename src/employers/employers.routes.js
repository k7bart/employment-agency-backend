const router = require("express").Router();
const employersController = require("./employers.controller");

router.get("/", employersController.getEmployers);

router.get("/:id", employersController.getEmployerById);

router.post("/", employersController.createEmployer);

module.exports = router;
