const express = require("express");
const router = express.Router();
const {
  getworkshop,
  getsingleworkshop,
  setworkshop,
  deleteworkshop,
  updateworkshop,
} = require("../controllers/workcontrollers");
//get all events
router.get("/", getworkshop);
//get single event
router.get("/:id", getsingleworkshop);
//post an event
router.post("/", setworkshop);
//delete an events
router.delete("/:id", deleteworkshop);
//update an events
router.patch("/:id", updateworkshop);

module.exports = router;
