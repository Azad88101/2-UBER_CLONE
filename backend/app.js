const e = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const userRoute = require("./routes/user.routes");


connectToDB();
const app = e();
dotenv.config();
app.use(cors());
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

app.use("/user", userRoute);

module.exports = app;
