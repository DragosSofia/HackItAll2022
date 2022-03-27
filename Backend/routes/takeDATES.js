const router = require("express").Router();
const { json } = require("express/lib/response");
const DATE = require("../models/DATES");

router.get("/carnacior", async (req, res) => {
    try {
        console.log( "trying carnacior" );
        const date = await DATE.findById(  "623f970fc47e6a2bbf0c944d" );
        res.status(200).json( date );
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
