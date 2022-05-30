
const { isMutant } = require("../services/mutant-service");
const __statsService = require("../services/stats-service");

post = (req, res) => {
    const response = isMutant(req.body.dna);
    __statsService.create(response);
    if(response){
        res.status(200);
	    res.send("OK");
    }
    else{
        res.status(240300);
	    res.send("Forbidden");
    }
}

module.exports.post = post