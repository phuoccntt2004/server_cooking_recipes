const asyncHandle = require("express-async-handler");
const FavouriteModel = require("../models/favouriteModel");

const addFavourite = asyncHandle(async (req, res) => {
  try {
    const { idUser, idMeal } = req.body;
    const newFavourite = new FavouriteModel({
      idUser,
      idMeal,
    });
    const saveFavourite = await newFavourite.save();
    if (saveFavourite) {
      res.status(200).json({
        message: "thêm thành công",
        data: newFavourite,
      });
    }
    console.log("them thành conngs");
  } catch (error) {
    res.status(400).send(error);
  }
});
const getFavouriteByIdUserAndByIdMeal = asyncHandle(async (req, res) => {
  const { idUser, idMeal } = req.query;
  try {
    const favourite = await FavouriteModel.findOne({
      idUser: idUser,
      idMeal: idMeal,
    });
    if (!favourite) {
      return res.status(200).json({ message: "lỗi" });
    }
    res.status(200).json(favourite);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

const getFavouriteByIdUser = asyncHandle(async (req, res) => {
  const { idUser } = req.query;
  try {
    const favourite = await FavouriteModel.find({ idUser });
    if (!favourite) {
      return res.status(200).json({ message: "lỗi" });
    }
    res.status(200).json(favourite);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

const deleteFavouriteByIdUserAndByIdMeal = asyncHandle(async (req, res) => {
  const { idUser, idMeal } = req.query;
  try {
    const favourite = await FavouriteModel.findOneAndDelete({
      idUser: idUser,
      idMeal: idMeal,
    });
    if (favourite) {
      res.status(200).json({ messae: "Xóa thành công" });
      console.log("xóa thành công");
    } else {
      res.status(200).json({ messae: "Xóa không thành công" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = {
  addFavourite,
  getFavouriteByIdUser,
  getFavouriteByIdUserAndByIdMeal,
  deleteFavouriteByIdUserAndByIdMeal,
};
