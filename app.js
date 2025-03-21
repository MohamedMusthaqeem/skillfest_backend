require("dotenv").config();
const express = require("express");
//cors
const cors = require("cors");
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
const everoutes = require("./Routes/eventroutes");
const workroutes = require("./Routes/workshoproutes");
const registerroutes = require("./Routes/registerroutes");
const userroutes = require("./Routes/userroutes");
const user_mainroutes = require("./Routes/user_mainroutes");
const adminroutes = require("./Routes/adminroutes");
const scraperoutes = require("./Routes/scarperoutes");
const user_get_routes = require("./Routes/user_get_data");
const dashboardroutes = require("./Routes/dashboardroutes");
// app instance
const app = express();
//cors middleware
app.use(cors());
app.options("/api/routes", cors());
//  json middleware
app.use(express.json());
//  url encoded middleware
app.use(express.urlencoded({ extended: true }));
//com routes
app.use("/api/routes", comroutes);
//events routes
app.use("/api/events", everoutes);
//workshop routes
app.use("/api/workshops", workroutes);
//registre routes
app.use("/api/register", registerroutes);
//user routes
app.use("/api/user", userroutes);
//user_admin
app.use("/api/user_main", user_mainroutes);
//admin
app.use("/api/admin", adminroutes);
//get all data for users
app.use("/get_all", user_get_routes);

app.use("/api/scrape", scraperoutes);

app.use("/api/dashboard", dashboardroutes);
app.listen(process.env.PORT, () => {
  console.log("connected");
});
