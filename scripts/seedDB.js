const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pecommembers"
);

mongoose.connect(MONGODB_URI);

const userSeed = [
  {
    name: "Danny Moore",
    email: "dan@yahoo.com",
    password: "123456",
    address: "736 tugsdhg lkk;l",
    phone: "8753635",
    ccard: "9383644893938",    
    date: new Date(Date.now())
  },
  {
    name: "Lexi your",
    email: "lexi@yahoo.com",
    password: "123456",
    address: "1234 tugsdhg lkk;l",
    phone: "876519876",
    ccard: "9871542367542321",    
    date: new Date(Date.now())
  },
  {
    name: "Kim dads",
    email: "dad@yahoo.com",
    password: "123456",
    address: "7363 tugsdhg lkk;l",
    phone: "24368760",
    ccard: "08773635738",    
    date: new Date(Date.now())
  },  
  {
    name: "James doe",
    email: "doe@yahoo.com",
    password: "123456",
    address: "1234 tugsdhg lkk;l",
    phone: "98373635",
    ccard: "763839028272534",    
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
