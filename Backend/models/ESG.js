const mongoose = require("mongoose")

const ESGSchema = new mongoose.Schema(
    {
        id: {type: Number},
        esg: {type: Array},
        cat: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model("autos", ESGSchema)