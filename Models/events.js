const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    first_prize: {
      type: Number,
      required: true,
    },
    second_prize: {
      type: Number,
      required: true,
    },
    third_prize: {
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
    venue: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Events", eventSchema);
