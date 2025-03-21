const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  date: Date,
  participants: Number,
});
const workshopSchema = new Schema({
  name: String,
  date: Date,
  participants: Number,
});

const competitionSchema = new Schema({
  name: String,
  date: Date,
  participants: Number,
});

const Event = mongoose.model("EventDashboard", eventSchema);
const Workshop = mongoose.model("WorkshopDashboard", workshopSchema);
const Competition = mongoose.model("CompetitionDashboard", competitionSchema);

module.exports = {
  Event,
  Workshop,
  Competition,
};
