const router = require("express").Router();

const { caseSubmit, cases, caseDone } = require("../controllers/case");

// route for creating report/submit case

router.post("/case", caseSubmit);

// Resolved The case

router.post("/casedone/:caseId", caseDone);

// route for getting all the cases

router.get("/cases", cases);

module.exports = router;
