const __mongoDriver = require("./mongo-driver");
const _db = __mongoDriver.db();
const _modelName = "stats";

const insert = async (model) => {
    let client = await __mongoDriver.client();
    let data = await client.db(_db).collection(_modelName).insertOne(model);
};

const fetch = async () => {
    let client = await __mongoDriver.client();
    let data = await client
        .db(_db)
        .collection(_modelName)
        .find()
        .toArray();
    
    return data;
};
        
module.exports.insert = insert;
module.exports.fetch = fetch;