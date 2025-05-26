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
    select: false,
  },
  socketId: {
    type: String,
  },
});

// ✅ Instance method
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.AUTH_TOKEN_SECRET, {
    expiresIn: "24h",
  });
};

// ✅ Static method
userSchema.statics.hashPassword = async function (password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

userSchema.methods.comparePassword = async function (password) {
  if (!password || !this.password) {
    throw new Error("Missing password or hash");
  }
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
