const User=require("../Models/user_main");
const jwt=require("jsonwebtoken");
//create token
const createToken=(_id)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}
// login user func
const loginUser=async (req,res)=>{
   const {email,password}=req.body
   try{
    const user= await User.login(email,password);
    const name=user.user_name;
    const token=createToken(user._id);
    res.status(200).json({email,name,token});
 }
 catch(error){
   res.status(400).json({error:error.message})
 }
}

const signupUser=async(req,res)=>{
    const{ user_name,email,password}=req.body;
    try{
       const user= await User.signup(user_name,email,password);

       const token=createToken(user._id);
       res.status(200).json({email,token});
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}

module.exports={
    loginUser,
    signupUser,
}