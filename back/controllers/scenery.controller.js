//Models
const { Scenery } = require('../models/scenery.model');
const { User } = require('../models/user.model');

//Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const createScenery = catchAsync(async (req, res, next) => {
    const { sceneryName, country } = req.body;
    const { sessionUser } = req;

    const user = await User.findById(sessionUser._id);

    const sceneryExist = await Scenery.findOne({ sceneryName });

    if (sceneryExist) {
        return next(new AppError('Busy scenery name', 400));
    }

    user.password = undefined;

    const newScenery = await Scenery.create({
        sceneryName,
        user,
        country
    });

    res.status(201).json({
        status: 'success',
        newScenery
    });

});

module.exports = { createScenery };