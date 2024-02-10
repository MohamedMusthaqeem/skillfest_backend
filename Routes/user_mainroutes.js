const express=require("express");
const router=express.Router();

const{
  signupUser,
  loginUser,
  getUser,deleteUser,
}=require("../controllers/user_maincontroller");
const { compareSync } = require("bcrypt");

//login user 
router.post('/login',loginUser)

//signup user
router.post('/signup',signupUser);

//get main_user
router.get('/get_user',getUser);
//delete user
router.delete('/:id',deleteUser);

module.exports=router