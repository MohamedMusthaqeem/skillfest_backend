const mongoose=require("mongoose");
const Register=require("../Models/register");
const{
SendmailTransport
}=require("../middleware/email")
//get specified register
const getRegister = async (req, res) => {
    const user_id=req.user._id;
    const register = await Register.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(register);
  };
//get all register
const get_all_Register = async (req, res) => {
  const register = await Register.find({}).sort({ createdAt: -1 });
  res.status(200).json(register);
};
  const setRegister = async (req, res) => {
    const {
        name,
        year,
        college,
        email,
        phone_no,
        event_name,
        fees,
        supportnumone,
        supportnumtwo,
        date,
        time,
        upload,
    } = req.body;
    try {
      const user_id=req.user._id;
      const register = await Register.create({
        name,
        year,
        college,
        email,
        phone_no,
        event_name,
        fees,
        supportnumone,
        supportnumtwo,
        user_id,
        date,
        time,
        upload,
      });
      if(email){
        SendmailTransport(email,name,event_name,supportnumone,supportnumtwo,date,time);
      }
      res.status(200).json(register);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  module.exports={
    get_all_Register,
    getRegister,
    setRegister,
  }