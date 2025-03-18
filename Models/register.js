const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    event_name: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    supportnumone: {
      type: Number,
      required: true,
    },
    supportnumtwo: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    upload: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    user_main_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Register", registerSchema);
