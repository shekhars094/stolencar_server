const Police = require("../models/police");

// createPolice logic

const createPolice = async (req, res) => {
    try {
        const policeDetail = new Police(req.body);
        const savePolice = await policeDetail.save();
        console.log(savePolice);
        return res.json(savePolice);
    } catch (error) {
        return res.status(400).json({
            err: "Something is Gone wrong in saving",
        });
    }
};

// getAll Police

const getAllPolice = async (req, res) => {
    try {
        const allPolice = await Police.find().exec();
        return res.json(allPolice);
    } catch (error) {
        return res.status(400).json({
            err: "Something is gone wrong",
        });
    }
};

module.exports = { createPolice, getAllPolice };
