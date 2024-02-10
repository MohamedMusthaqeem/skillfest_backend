const { mongoose } = require("mongoose");
const Workshop = require("../Models/workshop");

//get specific workshops
const getworkshop = async (req, res) => {
  const user_id=req.user._id;
  const workshop = await Workshop.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(workshop);
};
//get all workshop
const get_user_workshop = async (req, res) => {
  const workshop = await Workshop.find({}).sort({ createdAt: -1 });
  res.status(200).json(workshop);
};
//get single workshop
const getsingleworkshop = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ err: "no evnets found" });
  }
  const workshop = await Workshop.findById(id);
  if (!workshop) {
    return res.status(400).json({ err: "no events found" });
  }
  res.status(200).json(workshop);
};
//post a workshop
const setworkshop = async (req, res) => {
  const {
    title,
    description,
    imageurl,
    time,
    date,
    no_of_hours,
    no_of_days,
    outcomes,
    incharge,
    amount,
    supportnumone,
    supportnumtwo,
  } = req.body;
  try {
    const user_id=req.user._id;
    const workshop = await Workshop.create({
      title,
      description,
      imageurl,
      time,
      date,
      no_of_hours,
      no_of_days,
      outcomes,
      incharge,
      amount,
      supportnumone,
      supportnumtwo,
      user_id
    });
    res.status(200).json(workshop);
  } catch (err) {
    res.status(400).json(err);
  }
};
//delete an workshop
const deleteworkshop = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ err: "no events founded with is id" });
  }
  const workshop = await Workshop.findOneAndDelete({ _id: id });
  if (!workshop) {
    return res.status(400).json({ err: "failed to delete" });
  }
  res.status(200).json(workshop);
};
//update workshop
const updateworkshop = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such events exists for update " });
  }
  const workshop = await Workshop.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workshop) {
    return res.status(404).json({ err: "failed to update" });
  }

  res.status(200).json(events);
};

module.exports = {
  getworkshop,
  get_user_workshop,
  getsingleworkshop,
  setworkshop,
  deleteworkshop,
  updateworkshop,
};
