const __statsController = require("../rest/stats-controller.js");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
    __statsController.get(req, res);
});

module.exports = router;