const helpersBackend = require("../helpersBackend");
const mongoose = require("mongoose");
const Users = mongoose.model("Users");

// find ideas when hit home route
exports.home = async (req, res) => {
  res.render("page1", { user: req.user });
};
