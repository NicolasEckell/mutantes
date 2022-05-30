const __statController = require("../rest/stat-controller.js");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
    __statController.get(req, res);
});

module.exports = router;