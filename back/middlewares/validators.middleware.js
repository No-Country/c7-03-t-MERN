const { body, validationResult } = require("express-validator");

const { AppError } = require("../utils/appError.util");

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidator = [
  body("userName").notEmpty().withMessage("Name cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .isAlphanumeric()
    .withMessage("Password must contain letters and numbers"),
  checkResult,
];

const createSportValidator = [
  body("nameSport").notEmpty().withMessage("Name cannot be empty"),
  checkResult,
];

const createSceneryValidator = [
  body("sceneryName").notEmpty().withMessage("Scenery name cannot be empty"),
  body("country").notEmpty().withMessage("Country name cannot be empty"),
  checkResult,
];

const createFildValidator = [
  body("nameFild").notEmpty().withMessage("Fild name cannot be empty"),
  body("accountPerson").notEmpty().withMessage("Account person name cannot be empty"),
  body("description").notEmpty().withMessage("Description person name cannot be empty"),
  body("price").notEmpty().withMessage("Price person name cannot be empty"),
  checkResult,
];

module.exports = {
  createUserValidator,
  createSportValidator,
  createSceneryValidator,
  createFildValidator
};
