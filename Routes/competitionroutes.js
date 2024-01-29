const express = require("express");
const {
  createnewcomp,
  getcomp,
  getsinglecomp,
  deletecomp,
  updateComp,
} = require("../controllers/compcontoller");
const router = express.Router();
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
