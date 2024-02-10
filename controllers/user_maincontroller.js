const User=require("../Models/user_main");
const mongoose=require("mongoose")
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
//signup
const signupUser=async(req,res)=>{
    const{ user_name,email,password}=req.body;
    try{
       const user= await User.signup(user_name,email,password);

       const token=createToken(user._id);
       res.status(200).json({user_name,email,token});
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}

//get main user
const getUser =async(req,res)=>{
   const userget = await User.find({}).sort({ createdAt: -1 });
   res.status(200).json(userget);
}
//delete mai user
const deleteUser = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({ err: "no user founded with is id" });
   }
   const user = await User.findOneAndDelete({ _id: id });
   if (!user) {
     return res.status(400).json({ err: "failed to delete" });
   }
   res.status(200).json(user);
 };

module.exports={
    loginUser,
    signupUser,
    getUser,
    deleteUser,
}