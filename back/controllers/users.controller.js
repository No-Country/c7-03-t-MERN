const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');
const { Booking } = require('../models/booking.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

dotenv.config({ path: './config.env' });

const createUser = catchAsync(async (req, res, next) => {
  const { userName, email, password } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    userName,
    email,
    password: hashPassword,
  });

  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    newUser,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, status: 'active' });

  if (!user) {
    return next(new AppError('Credentials invalid', 404));
  }

  const isPasswordaValid = await bcrypt.compare(password, user.password);

  if (!isPasswordaValid) {
    return next(new AppError('Credentials invalid', 404));
  }

  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '30 days',
  });

  res.status(201).json({
    status: 'success',
    userId: user._id,
    token,
  });
});

const getUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  user.password = undefined

  const bookings = await Booking.find({userId: user._id});

  res.status(200).json({ status: 'success', bookings, user });
});

module.exports = { createUser, login, getUser };
