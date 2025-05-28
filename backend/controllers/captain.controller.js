const { validationResult } = require("express-validator");
const Captain = require("../models/captain.model");
const ApiError = require("../utils/ApiError");
const Blacklist = require("../models/blacklist.model");
const register = async (req, res) => {
  try {
    const { fullname, email, password, vehicle } = req.body;

    if (!fullname || !email || !password || !vehicle) {
      throw new ApiError(409, "Required fields are missing");
    }

    const isAlreadyExist = await Captain.findOne({ email });
    if (isAlreadyExist) {
      throw new ApiError(409, "Captain already exists");
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "error from froontend",
        error: errors.array(),
      });
    }

    const hashed = await Captain.hashPassword(password);

    const captain = await Captain.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashed,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      },
    });

    const token = await captain.generateToken();

    return res.status(201).json({
      message: "Captain created successfully",
      data: { token, captain },
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Something went wrong",
      errors: error.errors || [],
    });
  }
};

const login = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty) {
    throw new ApiError(400, err);
  }

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(409, "something is missing");
  }

  const captain = await Captain.findOne({ email }).select("+password");

  if (!captain) {
    throw new ApiError(409, "user nor found");
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(409, "email or password is wrong");
  }

  const token = await captain.generateToken();
  console.log(token);

  res.cookie("token", token);
  return res.status(200).json({
    message: "user Logged In succesfully",
    data: {
      token,
      captain,
    },
  });
};

const getCaptainProfile = (req, res) => {
  return res.status(200).json({
    data: req.captain,
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

module.exports = { register, login, getCaptainProfile, logout };
