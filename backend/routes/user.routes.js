const e = require("express");
const { register } = require("../controllers/user.controller");
const router = e.Router();

const { body } = require("express-validator");

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

module.exports = router;
