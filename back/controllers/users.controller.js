const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

dotenv.config({ path: './config.env' });

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, phone, password, lat, long } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return next(new AppError('Email already taken', 400));
  }

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    userName: username,
    email,
    phone,
    password: hashPassword,
    location: {
      lat,
      long,
    },
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
    token,
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  await user.update({ userName: name, email });

  res.status(204).json({ status: 'success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: 'disabled' });

  res.status(204).json({ status: 'success' });
});

module.exports = { createUser, login, updateUser, deleteUser };
