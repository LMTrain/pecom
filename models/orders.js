const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  memberId: { type: String, required: true },
  item: String,
  price: Number,
  qty: Number,
  link: String,
  description: String,
  thumbnail: String,  
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
