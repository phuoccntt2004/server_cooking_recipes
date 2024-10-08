const { default: mongoose } = require("mongoose");

const FavouriteSchema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  idMeal:{
    type:String
  },
  
}, {
    timestamps:true
});
const FavouriteModel = mongoose.model('favourite',FavouriteSchema)
module.exports=FavouriteModel
