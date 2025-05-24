const e = require("express");
const cors = require("cors");


const app = e();
app.use(cors());







app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
