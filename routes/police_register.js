const router = require("express").Router();

const {
    createPolice,
    getAllPolice,
} = require("../controllers/police_register");

// create police router

router.post("/createpolice", createPolice);

// get all police list

router.get("/polices", getAllPolice);

module.exports = router;
