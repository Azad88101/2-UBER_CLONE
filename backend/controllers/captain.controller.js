const { validationResult } = require("express-validator");
const Captain = require("../models/captain.model");
const ApiError = require("../utils/ApiError");

const register = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty) {
    throw new ApiError(400, err);
  }

  const { fullname, email, password, vehicle } = req.body;

  if (!fullname || !email || !password || !vehicle) {
    throw new ApiError(409, "something is missing");
  }

  const isAlreadyExist = Captain.findOne({ email });
  if (!isAlreadyExist) {
    throw new ApiError(409, "captain already exist");
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
  console.log(token);

  return res.status(201).json({
    message: "captain create succesfully",
    data: { token, captain },
  });
  
};

module.exports = { register };

// vehicle: {
//     color: {
//       type: String,
//       required: true,
//     },
//     plate: {
//       type: string,
//       required: true,
//     },

//     capacity: {
//       type: Number,
//       required: true,
//     },
//     vehicleType: {
//       type: String,
//       enum: ["bike", "auto", "car"],
//     },
//   },
