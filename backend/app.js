const e = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const userRoute = require("./routes/user.routes");
const captianRoute = require("./routes/captain.route");
const cookieParser = require("cookie-parser");

connectToDB();
const app = e();
dotenv.config();
app.use(cors());
app.use(e.urlencoded({ extended: true }));
app.use(e.json());

app.use(cookieParser())
app.use("/user", userRoute);
app.use("/captain", captianRoute);

module.exports = app;
