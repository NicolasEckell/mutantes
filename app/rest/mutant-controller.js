
const { isMutant } = require("../services/mutant-service.js");

post = (req, res) => {
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
}

module.exports.post = post