const mongoose = require("mongoose")

const DATESchema = new mongoose.Schema(
    {
        dates: {type: Array}
    },
    {timestamps: true}
);

module.exports = mongoose.model("carnacior", DATESchema)