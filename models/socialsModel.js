const mongoose = require("mongoose");

const socialsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },

  instagram: {
    type: String,
  },
  linkedin: {
    type: String,
  },

  twitter: {
    type: String,
  },
  threads: {
    type: String,
  },
  snapchat: {
    type: String,
  },
});

module.exports = mongoose.model("Socials", socialsSchema);
