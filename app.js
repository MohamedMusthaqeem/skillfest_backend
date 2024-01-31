const express = require("express");
//cors
const cors=require("cors");
// db connection setup
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/skillfest")
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });
const comroutes = require("./Routes/competitionroutes");
const everoutes =require("./Routes/eventroutes");
const workroutes =require("./Routes/workshoproutes")
// app instance
const app = express();
//cors middleware
app.use(cors());
app.options('/api/routes',cors())
//  json middleware
app.use(express.json());
//  url encoded middleware
app.use(express.urlencoded({ extended: true }));
//com routes
app.use("/api/routes", comroutes);
//events routes
app.use("/api/events",everoutes);
//workshop routes
app.use("/api/workshops",workroutes);


app.listen(5000, () => {
  console.log("connected");
});
