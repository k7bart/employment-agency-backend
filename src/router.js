const router = require("express").Router();

const agreement = require("./modules/agreement/agreement.routes");
const area = require("./modules/area/area.routes");
const auth = require("./modules/auth/auth.routes");
const candidate = require("./modules/candidate/candidate.routes");
const employer = require("./modules/employer/employer.routes");
const vacancy = require("./modules/vacancy/vacancy.routes");

const { checkAuth } = require("./middlewares/auth.middleware");

router.use("/agreements", checkAuth, agreement);
router.use("/areas", checkAuth, area);
router.use("/auth", auth);
router.use("/candidates", checkAuth, candidate);
router.use("/employers", checkAuth, employer);
router.use("/vacancies", checkAuth, vacancy);

module.exports = router;
