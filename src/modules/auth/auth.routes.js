const router = require("express").Router();
const { asyncWrapper } = require("../../middlewares/error.middleware");
const authController = require("./auth.controller");

router.post("/login", asyncWrapper(authController.login));

router.post("/signup", asyncWrapper(authController.signup));

module.exports = router;
