const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  memberId: { type: String },
  item: { type: String },
  price: { type: Number },
  qty: { type: Number },
  link: {type: String,},
  description: { type: String},
  thumbnail: {type: String },  
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
