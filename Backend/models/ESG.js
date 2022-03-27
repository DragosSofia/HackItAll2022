const mongoose = require("mongoose")

const ESGSchema = new mongoose.Schema(
    {
        esg: {type: Array},
        cat: {type: String},
        img: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model("autos", ESGSchema)