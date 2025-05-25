const { hash } = require("bcrypt");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const { validationResult } = require("express-validator");
const Blacklist = require("../models/blacklist.model");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400, "something went wrong");
  }

  const { fullname, email, password } = req.body;

  // console.log(fullname,email,password)

  if (!fullname.firstname || !email || !password)
    throw new ApiError(409, "something is missing ");

  // console.log(password)
  const hashPassword = await User.hashPassword(password);
  // console.log(hashPassword)

  const user = await User.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashPassword,
  });

  console.log(user);

  const token = user.generateAuthToken();
  console.log(token);

  return res.status(201).json({ token, user });
};

const login = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    console.log(error);
    throw new ApiError(409, error);
  }

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(409, "somethng is missing");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Imvalid email or password");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "wrong pasword");
  }

  const token = await user.generateAuthToken();
  // console.log(token);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
  });

  return res.status(200).json({ token, user });
};

const getUserProfile = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
const logout = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  const blacklist = await Blacklist.create({
    token,
  });

  return res.status(200).json({ message: "Logged out succesfully" });
};

module.exports = {
  register,
  login,
  getUserProfile,
  logout,
};
