const router = require("express").Router();
const ESG = require("../models/ESG");

router.get("/carac/:id", async (req, res) => {
    try {
        const esgArray = await ESG.findById(req.params.id);
        res.status(200).json(esgArray);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
