const mongoose = require("mongoose");

const scenerySchema = new mongoose.Schema({
  sceneryName: {
    type: String,
    required: [true, "Please enter you name scenery "],
  },
  user: {
    type: Object,
    required: [true, "Please enter your user"],
  },
  country: {
    type: String,
    required: [true, "Please enter a valid country"],
  },
  status: {
    type: String,
    default: "active",
  },
});

const Scenery = mongoose.model("Scenery", scenerySchema);

module.exports = { Scenery };
