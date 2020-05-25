const router = require("express").Router();

const {
    createPolice,
    getAllPolice,
} = require("../controllers/police_register");

router.post("/createpolice", createPolice);

router.get("/polices", getAllPolice);

module.exports = router;
