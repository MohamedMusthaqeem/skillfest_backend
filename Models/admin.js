const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const adminSchema = new Schema({
  admin_name: {
    type: String,
    required: true,
  },
  admin_email: {
    type: String,
    required: true,
    unique: true,
  },
  admin_password: {
    type: String,
    required: true,
  },
});

// static signup method
adminSchema.statics.signup = async function (admin_name, admin_email, admin_password) {
  //validate

  const exists = await this.findOne({ admin_email });

  if (!admin_name || !admin_email || !admin_password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(admin_email)) {
    throw Error("Invalid Email");
  }

  if (!validator.isStrongPassword(admin_password)) {
    throw Error("Provide a strong password");
  }

  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(12);

  const hash = await bcrypt.hash(admin_password, salt);

  const user = await this.create({ admin_name, admin_email, admin_password: hash });

  return user;
};
//login

adminSchema.statics.login = async function (admin_email, admin_password) {
  if (!admin_email|| !admin_password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ admin_email });

  if (!user) {
    throw Error("Invalid Email");
  }

  const match = await bcrypt.compare(admin_password, user.admin_password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};
module.exports = mongoose.model("Admin", adminSchema)