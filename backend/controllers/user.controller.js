const { hash } = require("bcrypt");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const { validationResult } = require("express-validator");

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

  const token =  user.generateAuthToken();
  console.log(token);
 return res.status(201).json({ token, user });
};

module.exports = {
  register,
};
