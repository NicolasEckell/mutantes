
const { isMutant } = require("../services/mutant-service.js");
const __statsService = require("../services/stats-service.js");

post = (req, res) => {
    const response = isMutant(req.body.dna);
    __statsService.create(response);
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
}

module.exports.post = post