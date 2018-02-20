const mongoose = require("mongoose");
mongoose.connect("mongodb://harrydry:DavidLuiz4@ds143388.mlab.com:43388/bdate");
mongoose.Promise = global.Promise;
require("./models/Users");
const passportConfig = require("./config/passportConfig");
const expressStaticGzip = require("express-static-gzip");

const express = require("express");
const path = require("path");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const routes = require("./routes/index");
const helpers = require("./helpers");
const fs = require("fs");
const app = express();

app.locals.diwtn = require("date-fns/distance_in_words_to_now");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    maxAge: 24 * 24 * 24 * 365 * 1000,
    keys: ["asdasdsda"]
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.icon = name => fs.readFileSync(`./public/icons/${name}.svg`);
  next();
});

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening"));
