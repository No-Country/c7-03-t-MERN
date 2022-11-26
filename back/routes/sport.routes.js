const express = require("express");
const sportRouter = express.Router();

//Controllers
const {
  createSport,
} = require("../controllers/sport.controller");
const {createSportValidator} = require("../middlewares/validators.middleware")

sportRouter.post("/", createSportValidator, createSport);

module.exports = { sportRouter };
