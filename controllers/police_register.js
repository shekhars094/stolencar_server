const Police = require("../models/police");

// createPolice logic

const createPolice = async (req, res) => {
    try {
        const policeDetail = new Police(req.body);
        const savePolice = await policeDetail.save();
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
        const allPolice = await Police.find()
            .populate("handling_case", "name car_detail")
            .exec();
        return res.json(allPolice);
    } catch (error) {
        return res.status(400).json({
            err: "Something is gone wrong",
        });
    }
};

// Exporting all the controller

module.exports = { createPolice, getAllPolice };
