const mongoose = require("mongoose");

const fildImgSchema = new mongoose.Schema({
  fildUrl: {
    type: String,
    required: [true, "Please enter your image"],
  },
  fildId: {
    type: Object,
  },
  status: {
    type: String,
    default: "active",
  },
});

const FildImg = mongoose.model("FildImg", fildImgSchema);

module.exports = { FildImg };
