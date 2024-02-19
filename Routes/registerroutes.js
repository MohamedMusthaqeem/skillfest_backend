const express = require("express");
const requireAuth=require('../middleware/require_userAuth');
const {
  getRegister,
  setRegister,
  get_all_Register,
} = require("../controllers/registercontroller");
const router = express.Router();
//auth middleware
router.use(requireAuth);
//get resgistered data
router.get("/", getRegister);
//get all register
router.get("/all",get_all_Register);
//post a register
router.post("/", setRegister);

module.exports=router;