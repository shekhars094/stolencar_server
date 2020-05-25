const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    car_detail: {
        type: String,
        required: true,
    },
    assigned_police: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Police",
    },
});

module.exports = mongoose.model("User", userSchema);
