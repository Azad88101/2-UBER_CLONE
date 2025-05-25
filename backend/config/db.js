const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const connectToDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connect ho gya");
  } catch (error) {
    console.log("error in connect to data base", error);
  }
};

module.exports = connectToDB;
