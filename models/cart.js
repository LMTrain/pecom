const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  item: { type: String, required: true},
  price: { type: Number, required: true, maxlength: 5 },
  qty: { type: Number, required: true, maxlength: 5 },
  link: {type: String,},
  description: { type: String},
  thumbnail: {type: String },  
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
