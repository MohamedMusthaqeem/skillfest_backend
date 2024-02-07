const User=require("../Models/admin");
const jwt=require("jsonwebtoken");
//create token
const createToken=(_id)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}
// login user func
const loginUser=async (req,res)=>{
   const {admin_email,admin_password}=req.body
   try{
    const user= await User.login(admin_email,admin_password);
    const name=user.admin_name;
    const token=createToken(user._id);
    res.status(200).json({admin_email,name,token});
 }
 catch(error){
   res.status(400).json({error:error.message})
 }
}

const signupUser=async(req,res)=>{
    const{ admin_name,admin_email,admin_password}=req.body;
    try{
       const user= await User.signup(admin_name,admin_email,admin_password);

       const token=createToken(user._id);
       res.status(200).json({admin_email,token});
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}

module.exports={
    loginUser,
    signupUser,
}