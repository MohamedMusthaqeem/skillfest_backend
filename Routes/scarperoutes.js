const express = require("express");
const { scrapeall } = require("../controllers/scrapecontroller");
const router = express.Router();

router.get("/", scrapeall);

module.exports = router;
