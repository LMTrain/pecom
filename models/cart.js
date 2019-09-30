const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  memberId: { type: String },
  item: { type: String },
  price: { type: Number },
  qty: { type: Number },
  link: {type: String,},
  description: { type: String},
  thumbnail: {type: String },  
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
