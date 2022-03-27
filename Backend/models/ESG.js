const mongoose = require("mongoose")

const ESGSchema = new mongoose.Schema(
    {
        esg: {type: Array},
        cat: {type: Array},
        img: {type: String},
        last: {type: Number}
    },
    {timestamps: true}
);

module.exports = mongoose.model("autos", ESGSchema)