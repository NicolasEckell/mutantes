const __mutantController = require("../rest/mutant-controller.js");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res, next) {
    __mutantController.post(req, res);
});

module.exports = router;