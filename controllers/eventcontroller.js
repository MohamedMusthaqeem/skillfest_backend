const  mongoose  = require("mongoose");
const Events = require("../Models/events");

//get specific events
const getevents = async (req, res) => {
  const user_id=req.user._id;
  const events = await Events.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(events);
};
//get all events
const get_user_events= async (req, res) => {
  const events = await Events.find({}).sort({ createdAt: -1 });
  res.status(200).json(events);
};
//get single events
const getsingleevents = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ err: "no evnets found" });
  }
  const events = await Events.findById(id);
  if (!events) {
    return res.status(400).json({ err: "no events found" });
  }
  res.status(200).json(events);
};
//post a events
const setevents = async (req, res) => {
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
    venue,
  } = req.body;
  try {
    const user_id=req.user._id;
    const events = await Events.create({
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
      venue,
      user_id
    });
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
  }
};
//delete an events
const deleteevents = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ err: "no events founded with is id" });
  }
  const events = await Events.findOneAndDelete({ _id: id });
  if (!events) {
    return res.status(400).json({ err: "failed to delete" });
  }
  res.status(200).json(events);
};
//update components
const updateevents = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such events exists for update " });
  }
  const events = await Events.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!events) {
    return res.status(404).json({ err: "failed to update" });
  }

  res.status(200).json(events);
};

module.exports = {
  getevents,
  get_user_events,
  getsingleevents,
  setevents,
  deleteevents,
  updateevents,
};
