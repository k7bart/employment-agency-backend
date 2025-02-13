const router = require("express").Router();

const candidates = require("./candidates/candidates.routes");

router.use("/candidates", candidates);

module.exports = router;
