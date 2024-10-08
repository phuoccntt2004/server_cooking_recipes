const Router = require('express');
const { addFavourite, getFavouriteByIdUser, getFavouriteByIdUserAndByIdMeal, deleteFavouriteByIdUserAndByIdMeal } = require('../controllers/favouriteController');

const favouriteRouter= Router()
favouriteRouter.post('/add-favourite',addFavourite)
favouriteRouter.get('/get-favourite',getFavouriteByIdUser)
favouriteRouter.get('/get-favourite-by-id',getFavouriteByIdUserAndByIdMeal)
favouriteRouter.delete('/delete-favourite-by-id',deleteFavouriteByIdUserAndByIdMeal)

module.exports = favouriteRouter