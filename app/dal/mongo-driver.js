const { MongoClient } = require("mongodb");

let _client = null;
let _uri =
	process.env.db_uri ||
	"mongodb+srv://card-managment-test:jR5CYm48XodiRknF@cluster0.pqwkz.mongodb.net/";
let _db = process.env.db_collection || "mutantes_test";

const _url = _uri + _db + "?retryWrites=true&w=majority";

const connectToClientDB = async function () {
	if (_client !== null) return _client;
	_client = await MongoClient.connect(_url, {
		useNewUrlParser: true,
	}).catch((err) => {
		throw err;
	});
	return _client;
};

const client = function () {
	console.log(_uri, _db);
	try {
		return connectToClientDB();
	} catch (err) {
		throw err;
	}
};

const db = () => _db;

module.exports.client = client;
module.exports.db = db;
