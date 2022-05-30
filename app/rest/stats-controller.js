
const __statsService = require("../services/stats-service");

get = async (req, res) => {
    const data = await __statsService.get();
    res.status(200);
	res.send(data);
}

module.exports.get = get