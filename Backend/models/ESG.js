const mongoose = require("mongoose")

const ESGSchema = new mongoose.Schema(
    {
        esg: {type: Array},
        cat: {type: Array},
        img: {type: String},
        last: {type: Number},
        grade: {type: String},
        prices: {type: Array}
    },
    {timestamps: true}
);

module.exports = mongoose.model("autos", ESGSchema)