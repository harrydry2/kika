const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const keys = require("./keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id);
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "/auth/facebook/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      const currentUser = await Users.findOne({ facebookId: profile.id });
      if (currentUser) {
        done(null, currentUser);
      } else {
        const newUser = await new Users({
          facebookId: profile.id,
          username: profile.username,
          profileImg: profile.photos[0].value.replace("normal", "400x400")
        }).save();
        done(null, newUser);
      }
    }
  )
);
