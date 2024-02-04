const mongoose=require("mongoose");
const Register=require("../Models/register");

const getRegister = async (req, res) => {
    const user_id=req.user._id;
    const register = await Register.find({user_id}).sort({ createdAt: -1 });
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
        user_id

      });
      res.status(200).json(register);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  module.exports={
    getRegister,
    setRegister,
  }