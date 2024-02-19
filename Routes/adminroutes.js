const express=require("express");
const router=express.Router();

const{
  signupUser,
  loginUser
}=require("../controllers/admincontroller");

//login user 
router.post('/login',loginUser)

//signup user
router.post('/signup',signupUser);

module.exports=router