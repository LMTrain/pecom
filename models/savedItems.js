const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedItemsSchema = new Schema({
  memberId: { type: String },
  item: { type: String },
  price: { type: Number }, 
  link: {type: String,},
  description: { type: String},
  thumbnail: {type: String },  
});

const SavedItems = mongoose.model("SavedItems", savedItemsSchema);

module.exports = SavedItems;
