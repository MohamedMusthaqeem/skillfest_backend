const express = require("express");
const requireAuth=require('../middleware/require_userAuth');
const {
  getRegister,
  setRegister,
} = require("../controllers/registercontroller");
const router = express.Router();
//auth middleware
router.use(requireAuth);
//get resgistered data
router.get("/", getRegister);
//post a register
router.post("/", setRegister);

module.exports=router;