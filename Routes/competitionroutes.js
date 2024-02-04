const express = require("express");
const requireAuth=require('../middleware/requireAuth');
const {
  createnewcomp,
  getcomp,
  getsinglecomp,
  deletecomp,
  updateComp,
} = require("../controllers/compcontoller");

const router = express.Router();
//middlewareauth
router.use(requireAuth);

// get all competitions
router.get("/", getcomp);
//get single competitions
router.get("/:id",getsinglecomp);
//post a new competitions
router.post("/", createnewcomp);
//delete acompetitions
router.delete("/:id", deletecomp);
//update a competitions
router.patch("/:id", updateComp);

module.exports = router;
