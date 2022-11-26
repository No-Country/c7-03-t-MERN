//Models
const { Fild } = require("../models/fild.model");
const { Scenery } = require("../models/scenery.model");
const { Sport } = require("../models/sport.model");
const { FildImg } = require("../models/fildImg.model");

//Utils
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");
const { storage } = require("../utils/firebase");

const createFild = catchAsync(async (req, res, next) => {
  const {
    nameFild,
    sceneryId,
    sportId,
    accountPerson,
    description,
    price,
  } = req.body;

  const sceneryExist = await Scenery.findById(sceneryId);
  const sportExist = await Sport.findById(sportId);

  if (!sceneryExist) {
    return next(new AppError("dont exist scenery", 404));
  }

  if (!sportExist) {
    return next(new AppError("dont exist sport", 404));
  }

  const fildPromises = req.files.map(async (file) => {
    const imgFildRef = ref(storage, `filds/${file.originalname}`);
    const imgUpload = await uploadBytes(imgFildRef, file.buffer);

    return await FildImg.create({
      fildUrl: imgUpload.metadata.fullPath,
    });
  });

  const imgFilds = await Promise.all(fildPromises);

  const newFild = await Fild.create({
    nameFild,
    sceneryId: sceneryExist,
    sportId: sportExist.nameSport,
    accountPerson,
    fildImgUrl: imgFilds,
    description,
    price,
  });

  res.status(201).json({
    status: "success",
    newFild,
  });
});

const getFildAll = catchAsync(async (req, res, next) => {
  const fildAlls = await Fild.find({});

  const fildPromises = fildAlls.map(async (fildAll) => {
    return fildAll.fildImgUrl;
  });

  const resultPro = await Promise.all(fildPromises);

  const promisesFild = resultPro[0].map(async (fildAll) => {
    const imgRef = ref(storage, fildAll.fildUrl);
    fildAll.fildUrl = await getDownloadURL(imgRef);
    return fildAll;
  });

  const fildAllsImg = await Promise.all(promisesFild);

  fildAlls.fildImgUr = undefined;

  res.status(201).json({
    status: "success",
    fildAlls,
  });
});

const getFildById = catchAsync(async (req, res, next) => {
  const { fild } = req;

  const fildPromises = fild.fildImgUrl.map(async (fildAll) => {
    const imgRef = ref(storage, fildAll.fildUrl);
    fildAll.fildUrl = await getDownloadURL(imgRef);
    return fildAll;
  });

  await Promise.all(fildPromises);

  res.status(201).json({
    status: "success",
    fild,
  });
});

module.exports = { createFild, getFildById, getFildAll };
