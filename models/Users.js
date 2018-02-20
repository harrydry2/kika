const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  facebookId: {
    type: String
  },
  profileImg: {
    type: String
  }
});

module.exports = mongoose.model("Users", userSchema);
