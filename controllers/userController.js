const mongoose = require("mongoose");
const passport = require("passport");

exports.logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};
