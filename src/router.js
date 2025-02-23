const router = require("express").Router();

const agreement = require("./agreement/agreement.routes");
const area = require("./area/area.routes");
const auth = require("./auth/auth.routes");
const candidate = require("./candidate/candidate.routes");
const employer = require("./employer/employer.routes");
const vacancies = require("./vacancy/vacancy.routes");

const { checkAuth } = require("./middlewares/auth");

router.use("/agreements", checkAuth, agreement);
router.use("/areas", checkAuth, area);
router.use("/auth", auth);
router.use("/candidates", checkAuth, candidate);
router.use("/employers", checkAuth, employer);
router.use("/vacancies", checkAuth, vacancies);

module.exports = router;
