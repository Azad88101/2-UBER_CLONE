const e = require("express");
const {
  register,
  login,
  getUserProfile,
  logout,
} = require("../controllers/user.controller");
const router = e.Router();

const { body } = require("express-validator");
const { userAuth } = require("../middleware/Auth.middleware");

router.post(
  "/register",

  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("first name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be atleast 6 characters long"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be atleast 6 characters long"),
  ],
  login
);

router.get("/profile", userAuth, getUserProfile);
router.get("/logout", logout);

module.exports = router;
