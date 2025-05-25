const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
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

// ✅ Instance method
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.AUTH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

// ✅ Static method
userSchema.statics.hashPassword = async function (password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
