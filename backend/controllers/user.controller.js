const { hash } = require("bcrypt");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const { validationResult } = require("express-validator");
const Blacklist = require("../models/blacklist.model");
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Throw ApiError with status 400, message, and errors array
      throw new ApiError(
        400,
        "Validation errors from frontend",
        errors.array()
      );
    }

    const { fullname, email, password, vehicle } = req.body;

    if (!fullname || !email || !password || !vehicle) {
      throw new ApiError(409, "Required fields are missing");
    }

    const isAlreadyExist = await Captain.findOne({ email });
    if (isAlreadyExist) {
      throw new ApiError(409, "Captain already exists");
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
  if (!err.isEmpty()) {
    throw new ApiError(400, "Validation errors from frontend", err.array());
  }

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(409, "Something is missing");
  }

  const captain = await Captain.findOne({ email }).select("+password");

  if (!captain) {
    throw new ApiError(409, "User not found");
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(409, "Email or password is wrong");
  }

  const token = await captain.generateToken();
  console.log(token);

  res.cookie("token", token);
  return res.status(200).json({
    message: "User logged in successfully",
    data: {
      token,
      captain,
    },
  });
};

const getUserProfile = (req, res, next) => {
  try {
    if (!req.user) {
      // Throw ApiError instead of direct res.status
      throw new ApiError(401, "Unauthorized");
    }

    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    // Pass error to centralized error handler or send uniform response here
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Something went wrong",
      errors: error.errors || [],
    });
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new ApiError(400, "No token found to blacklist");
    }

    await Blacklist.create({ token });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Something went wrong",
      errors: error.errors || [],
    });
  }
};

module.exports = {
  register,
  login,
  getUserProfile,
  logout,
};
