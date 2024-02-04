const express = require("express");
const requireAuth=require('../middleware/requireAuth');
const {
  getworkshop,
  getsingleworkshop,
  setworkshop,
  deleteworkshop,
  updateworkshop,
} = require("../controllers/workcontrollers");

const router = express.Router();
//auth midddle
router.use(requireAuth);
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
