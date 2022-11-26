//Models
const { Sport } = require("../models/sport.model");
//Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const createSport = catchAsync(async (req, res, next) => {
  const { nameSport } = req.body;

  const sportExist = await Sport.findOne({ nameSport });

  if (sportExist) {
    return next(new AppError("The sport already exists", 400));
  }
  const newSport = await Sport.create({
    nameSport,
  });

  res.status(201).json({
    status: "success",
    newSport,
  });
});

module.exports = { createSport };
