const express = require("express");
const router = express.Router();
const {
  getRegister,
  setRegister,
} = require("../controllers/registercontroller");

//get resgistered data
router.get("/", getRegister);
//post a register
router.post("/", setRegister);

module.exports=router;