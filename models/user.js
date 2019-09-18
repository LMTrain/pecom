const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, unique: true, trim: true, minlength: 5 },
  password: { type: String, required: true, minlength: 5 },
  address: {type: String},
  phone: {type: String },
  ccard: {type: String },  
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
