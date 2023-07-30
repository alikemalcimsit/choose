const mongoose = require("mongoose");

const primeSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Primes", primeSchema)