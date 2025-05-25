// const User = require("./../models/user.model");
// const jwt = require("jsonwebtoken");
// const ApiError = require("../utils/ApiError");
// const Blacklist = require("../models/blacklist.model");

// const auth = async (req, res, next) => {
//   try {
//   const token =
//   req.cookies.token ||
//   (req.headers.authorization?.startsWith("Bearer ") &&
//    req.headers.authorization.split(" ")[1]);


//     const blacklist = await Blacklist.findOne({ token });
//     if (blacklist) {
//       throw new ApiError(401, "Unauthorized");
//     }

//     if (!token) {
//       throw new ApiError(401, "Unauthorized");
//     }

//     const decoded = jwt.verify(token, process.env.AUTH_TOKEN_SECRET);

//     const user = await User.findById(decoded._id);

//     if (!user) {
//       throw new ApiError(404, "User not found");
//     }

//     req.user = user;
//     return next();
//   } catch (error) {
//     console.error("Auth error:", error.message);
//     return res.status(401).json({ message: "Unauthorized access" });
//   }
// };

// module.exports = auth;

const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization?.startsWith("Bearer ") &&
       req.headers.authorization.split(" ")[1]);

    if (!token) throw new ApiError(401, "Unauthorized - Token missing");

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


module.exports = auth;
