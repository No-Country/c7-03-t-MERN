const { Fild } = require("../models/fild.model");
const { Booking } = require("../models/booking.model");

const { catchAsync } = require("../utils/catchAsync.util");

const searchFilter = catchAsync(async (req, res, next) => {
  const nameSport = req.query.nameSport;
  const country = req.query.country;
  const date = req.query.date;

  const Filds = await Fild.find({
    nameSport,
  });

  const fildsCountry = Filds.filter((e) => e.sceneryId.country === country);

  fildsCountry.forEach(async (e) => {
    const bookings = await Booking.find({
      bookingDate: date,

    });

    console.log(bookings);

    if (bookings) {
      res.status(201).json({
        status: "success",
        message: "No se encontraron canchas con estas caracteristicas",
      });
    }
  });

  res.status(201).json({
    status: "success",
    fildsCountry,
  });
});

module.exports = {
  searchFilter,
};
