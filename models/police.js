const mongoose = require("mongoose");

const policeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    handling_case: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    area: {
        type: String,
        trim: true,
        required: true,
    },
    isactive: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Police", policeSchema);
