const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  memberId: { type: String },
  memberName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String },
  address: { type: String },
  phone: { type: String },
  password: { type: String, required: true  },
  cCard: { type: String },
  userTheme: { type: String },
  userImage: { type: String },
  colorDb: { type: String },
  textalignDb: { type: String },
  divfontsizeDb: { type: String },
  pfontsizeDb: { type: String },
  fontfamilyDb: { type: String },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart"
  },
  bookExchange: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: "Orders"
  },
  savedItems: {
    type: Schema.Types.ObjectId,
    ref: "SavedItems"
  },
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;