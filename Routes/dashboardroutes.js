const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const { getdashboard } = require("../controllers/dashboardcontroller");

const router = express.Router();
//auth middleware
router.use(requireAuth);
//get dashboard
router.get("/", getdashboard);

module.exports = router;
