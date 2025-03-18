const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

const {
  signupUser,
  loginUser,
  getUser,
  deleteUser,
} = require("../controllers/user_maincontroller");

//login user
router.post("/login", loginUser);
router.use(requireAuth);
//signup user
router.post("/signup", signupUser);

//get main_user
router.get("/get_user", getUser);
//delete user
router.delete("/:id", deleteUser);

module.exports = router;
