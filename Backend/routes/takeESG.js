const router = require("express").Router();
const { json } = require("express/lib/response");
const ESG = require("../models/ESG");
const DATE = require("../models/DATES");

router.get("/carac/:id", async (req, res) => {
    try {
        console.log( req.params.id);
        if( req.params.id === "623f970fc47e6a2bbf0c9411"){
            console.log( )
            const date = await DATE.findById( req.params.id);
            res.status(200).json( date );
        }
        else{
            const esgArray = await ESG.findById(req.params.id);
            res.status(200).json(esgArray);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
