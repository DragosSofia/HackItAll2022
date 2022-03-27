const router = require("express").Router();
const { json } = require("express/lib/response");
const ESG = require("../models/ESG");
//const DATE = require("../models/DATES");

router.get("/carac/:id", async (req, res) => {
    try {
         const esgArray = await ESG.findById(req.params.id);
         res.status(200).json(esgArray);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
