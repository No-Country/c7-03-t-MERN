const express = require('express');

// Controllers
const {
  createUser,
  login,
  getUser
} = require('../controllers/users.controller');

// Middlewares
const { createUserValidator } = require('../middlewares/validators.middleware');
const { userExists } = require('../middlewares/users.middleware');

const usersRouter = express.Router();

usersRouter.post('/signup', createUserValidator, createUser);

usersRouter.post('/login', login);

usersRouter.get('/getUser/:id', userExists, getUser)

module.exports = { usersRouter };
