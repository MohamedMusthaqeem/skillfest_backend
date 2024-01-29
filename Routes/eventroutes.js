const express = require("express");
const router = express.Router();
const {
  getevents,
  getsingleevents,
  setevents,
  deleteevents,
  updateevents,
} = require("../controllers/eventcontroller");
//get all events
router.get("/", getevents);
//get single event
router.get("/:id", getsingleevents);
//post an event
router.post("/", setevents);
//delete an events
router.delete("/:id", deleteevents);
//update an events
router.patch("/:id", updateevents);

module.exports=router