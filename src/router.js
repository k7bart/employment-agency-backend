const router = require("express").Router();

const agreements = require("./agreements/agreements.routes");
const areas = require("./areas/areas.routes");
const auth = require("./auth/auth.routes");
const candidates = require("./candidates/candidates.routes");
const employers = require("./employers/employers.routes");
const vacancies = require("./vacancies/vacancies.routes");

const { checkAuth } = require("./middlewares/auth");

router.use("/agreements", checkAuth, agreements);
router.use("/areas", checkAuth, areas);
router.use("/auth", auth);
router.use("/candidates", checkAuth, candidates);
router.use("/employers", checkAuth, employers);
router.use("/vacancies", checkAuth, vacancies);

module.exports = router;
