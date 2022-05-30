const __statsResource = require("../dal/stats-resource");

const create = (data) => {
    let stat = {
        dna: data === true ? 1 : 0
    }
    __statsResource.insert(stat);
};

const get = async () => {
    let data = await __statsResource.fetch(); 
    let total = data.length;
    let dna = 0;
    for (var value of Object.values(data)) {
        dna += value["dna"] === 1 ? 1 : 0;
    }
    let ratio = parseFloat((dna / total).toPrecision(2));
    let output = {
        "count_mutant_dna": dna, 
        "count_human_dna": total,
        "ratio": ratio
    }
    return output;
};
        
module.exports.create = create;
module.exports.get = get;