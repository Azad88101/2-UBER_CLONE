const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const Captain = require("../models/captain.model");
const Blacklist = require("../models/blacklist.model");

const userAuth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization?.startsWith("Bearer ") &&
        req.headers.authorization.split(" ")[1]);

    if (!token) throw new ApiError(401, "Unauthorized - Token missing");

    const isBlacklist = Blacklist.find({ token });

    if (!isBlacklist) {
      throw new ApiError(401, "Unauthorized - Token missing");
    }

    const decoded = jwt.verify(token, process.env.AUTH_TOKEN_SECRET);

    const user = await User.findById(decoded._id);
    if (!user) throw new ApiError(401, "Unauthorized - User not found");

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const CaptainAuth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization?.startsWith("Bearer ") &&
        req.headers.authorization.split(" ")[1]);

    if (!token) throw new ApiError(401, "Unauthorized - Token missing");

    const isBlacklist = Blacklist.find({ token });

    if (!isBlacklist) {
      throw new ApiError(401, "Unauthorized - Token missing");
    }

    const decoded = jwt.verify(token, process.env.AUTH_TOKEN_SECRET);

    const captain = await Captain.findById(decoded._id);
    if (!captain) throw new ApiError(401, "Unauthorized - captain not found");

    req.captain = captain;
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { userAuth, CaptainAuth };
