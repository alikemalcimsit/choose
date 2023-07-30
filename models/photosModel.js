const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  vote_count: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Photos" , photosSchema)