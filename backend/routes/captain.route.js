const e = require("express");
const { body } = require("express-validator");
const { register ,login,getCaptainProfile, logout} = require("../controllers/captain.controller");
const { CaptainAuth } = require("../middleware/Auth.middleware");


const router = e.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),

    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),

    body("vehicle.plate")
      .isLength({ min: 6 })
      .withMessage("Plate number must be at least 6 characters long"),

    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be a number and at least 1"),

  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  login
);


router.get('/profile',CaptainAuth,getCaptainProfile)
router.get('/logout',CaptainAuth,logout)

module.exports = router;
