const mongoose = require("mongoose");
const Schem = mongoose.Schema;

const Workshop = new Schem({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageurl:{
   type:String,
   required:true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  no_of_hours: {
    type: Number,
    required: true,
  },
  no_of_days: {
    type: Number,
    required: true,
  },
  outcomes: {
    type: String,
    required: true,
  },
  incharge:{
    type:String,
    required:true,
  },
  amount: {
    type: String,
    required: true,
  },
  supportnumone:{
    type:Number,
    required:true,
  },
  supportnumtwo:{
    type:Number,
    required:true,
  },
  venue:{
    type:String,
    required:true,
  },
  user_id:{
    type:String,
    required:true
  }
},
{timestamps:true});
module.exports=mongoose.model("Workshop",Workshop);