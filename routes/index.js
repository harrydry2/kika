const express = require("express");
const router = express.Router();
const passport = require("passport");
const mainController = require("../controllers/mainController");
const userController = require("../controllers/userController");

router.get("/", mainController.home);

// auth with twitter
router.get("/auth/facebook", passport.authenticate("facebook"));

// callback route for facebook to redirect to
router.get(
  "/auth/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => res.redirect("/")
);

// logout
router.get("/logout", userController.logout);

module.exports = router;
