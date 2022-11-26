const express = require("express");
const scenerysRouter = express.Router();

//Controllers
const {
  createScenery,
} = require("../controllers/scenery.controller");

//Middlewares
const { protectSession } = require("../middlewares/auth.middleware");
const {
  createSceneryValidator,
} = require("../middlewares/validators.middleware");

scenerysRouter.use(protectSession);

scenerysRouter.post("/", createSceneryValidator, createScenery);

module.exports = { scenerysRouter };
