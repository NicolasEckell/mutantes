const { isMutant } = require("../services/mutant-service.js");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res, next) {
    
    const response = isMutant(req.body.dna);
    if(response){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("OK");
        res.end();
    }
    else{
        res.writeHead(403, { "Content-Type": "application/json" });
        res.write("Forbidden");
        res.end();
    }
});

module.exports = router;