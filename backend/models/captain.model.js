const { default: mongoose } = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captionSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // ✅ 'select' is correct, not 'selected'
  },

  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["Bike", "Auto", "Car"],
      required: true,
    },
  },

  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
});

captionSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

captionSchema.methods.comparePassword = async function (password) {
  if (!password || !this.password) {
    throw new Error("Missing password or hash");
  }
  return await bcrypt.compare(password, this.password);
};


captionSchema.methods.generateToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.AUTH_TOKEN_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

const Captain = mongoose.model("Captain", captionSchema);
module.exports = Captain;
