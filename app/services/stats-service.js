const __mongoDriver = require("../dal/mongo-driver");
const _db = __mongoDriver.db();
const _modelName = "stats";

const create = async (response) => {
    let stat = {
        dna: response === true ? 1 : 0
    }
    let client = await __mongoDriver.client();
    let data = await client.db(_db).collection(_modelName).insertOne(stat);
};

const get = async () => {
    let client = await __mongoDriver.client();
    let data = await client
        .db(_db)
        .collection(_modelName)
        .find()
        .toArray();

    let total = data.length;
    let dna = 0;
    for (var value of Object.values(data)) {
        dna += value["dna"] === true ? 1 : 0;
    }
    let ratio = dna / total;
    return [dna, total, ratio];
};
        
module.exports.create = create;
module.exports.get = get;