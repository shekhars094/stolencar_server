const User = require("../models/user");
const Police = require("../models/police");

const { getRandomInt } = require("../utils/random_number");

// Case Submit and Assign Logic

const caseSubmit = async (req, res) => {
    try {
        const caseDetail = new User(req.body);
        const policeToBeAssign = await Police.find({ isactive: false });

        const randomValue = getRandomInt(policeToBeAssign.length);
        const assignedPolice = policeToBeAssign[randomValue];

        caseDetail.assigned_police = assignedPolice._id;
        assignedPolice.handling_case = caseDetail._id;
        assignedPolice.isactive = true;

        await assignedPolice.save();

        const userDetail = await caseDetail.save();

        return res.json(userDetail);
    } catch (error) {
        return res.status(400).json({
            err: "Something Wrong in Assigning Case",
        });
    }
};

// case Done Logic

const caseDone = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        const userDetail = await User.findById(caseId).exec();

        const policeAssigned = userDetail.assigned_police;

        const policeHandle = await Police.findById(policeAssigned).exec();

        policeHandle.handling_case = undefined;
        policeHandle.isactive = false;
        userDetail.assigned_police = undefined;

        await policeHandle.save();
        await userDetail.save();
        return res.json({ msg: "Case is Resolved" });
    } catch (error) {
        return res.status(400).json({
            err: "Something has gone wrong is the Process of Resolving",
        });
    }
};

// All the cases

const cases = async (req, res) => {
    try {
        const allCases = await User.find();
        if (!allCases) {
            return res.json({ msg: "Cases Are not Active" });
        }
        return res.json(allCases);
    } catch (error) {
        return res
            .status(400)
            .json({ err: "Something is Wrong in Fetching case Details" });
    }
};

module.exports = { caseSubmit, cases, caseDone };
