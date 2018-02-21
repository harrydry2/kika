const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  facebookId: {
    type: String
  },
  displayName: {
    type: String
  },
  photo: {
    type: String
  }
});

module.exports = mongoose.model("Users", userSchema);
