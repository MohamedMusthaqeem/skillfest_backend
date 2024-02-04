require("dotenv").config()
const express = require("express");
//cors
const cors=require("cors");
// db connection setup
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });
//import routes
const comroutes = require("./Routes/competitionroutes");
const everoutes =require("./Routes/eventroutes");
const workroutes =require("./Routes/workshoproutes");
const registerroutes=require("./Routes/registerroutes");
const userroutes=require("./Routes/userroutes")
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
//registre routes
app.use("/api/register",registerroutes)
//user routes
app.use("/api/user",userroutes)


app.listen(process.env.PORT, () => {
  console.log("connected");
});
