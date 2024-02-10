const mongoose = require("mongoose");
const Competition = require("../Models/competitions");
//get specific competitions
const getcomp = async (req, res) => {
  const user_id=req.user._id;
  const competitions = await Competition.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(competitions);
};
//get all competions
const get_user_comp = async (req, res) => {
  const competitions = await Competition.find({}).sort({ createdAt: -1 });
  res.status(200).json(competitions);
};
//get single
const getsinglecomp = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such competitions found" });
  }
  const getonecomp = await Competition.findById(id);
  if (!getonecomp) {
    return res.status(404).json({ err: "no competitions found" });
  }
  res.status(200).json(getonecomp);
};

//create a new
const createnewcomp = async (req, res) => {
  const {
    title,
    description,
    imageurl,
    time,
    date,
    amount,
    first_prize,
    second_prize,
    third_prize,
    supportnumone,
    supportnumtwo,
  } = req.body;
  try {
    const user_id=req.user._id;
    const newcom = await Competition.create({
      title,
      description,
      imageurl,
      time,
      date,
      amount,
      first_prize,
      second_prize,
      third_prize,
      supportnumone,
      supportnumtwo,
      user_id,
    });
    res.status(200).json(newcom);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

//delete one
const deletecomp = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such competitions" });
  }
  const deletingcomp = await Competition.findOneAndDelete({ _id: id });
  if (!deletingcomp) {
    return res.status(404).json({ err: "no such competitions" });
  }
  res.status(200).json(deletingcomp);
};

//update one
const updateComp = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ err: "no such competitions exists for update " });
  }
  const upComp = await Competition.findOneAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );

  if (!upComp) {
    return res.status(404).json({ err: "failed to update" });
  }

  res.status(200).json(upComp);
};

module.exports = {
  getcomp,
  getsinglecomp,
  createnewcomp,
  deletecomp,
  updateComp,
  get_user_comp,
};
