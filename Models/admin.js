const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const adminSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
adminSchema.statics.signup = async function (user_name, email, password) {
  //validate

  const exists = await this.findOne({ email });

  if (!user_name || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Provide a strong password");
  }

  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(12);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ user_name, email, password: hash });

  return user;
};
//login

adminSchema.statics.login = async function (email, password) {
  if (!email|| !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};
module.exports = mongoose.model("Admin", adminSchema)