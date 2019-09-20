const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersinpecom"
);


const userSeed = [
  {
    "memberId": "james@yahoo.com",
    "memberName": "Tony James",
    "userNamme": "james@yahoo.com",
    "email": [ "james@yahoo.com" ],    
    "password": "123456",
    "cCard": 2635211252523654,
    "contact": {
      "address": "5454 Victory Lane, Andover, MN 55304",
      "phone": 2154254252,
      "email": "james@yahoo.com"
    },
    "cart": {
      "item": "Mini Backpack - Peppa Girls Bag",
      "qty": 20,
      "unitPrice": 17.95,
      "link": "http://c.affil.walmart.com/t/api02?l=https%3A%2F%2Fwww.walmart.com%2Fip%2FMini-Backpack-Peppa-Pig-Pink-w-Friends-10-Girls-Bag-137636-2%2F138392823%3Faffp1%3DEO2CEt1dg2KjOSy0P4q5OwOs71DGZRnKBNAhdJoSy10%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
      "description": "Mini Backpack, Size: ~10&quot; x 8&quot; x 3&quot;; Licensed Product",
      "thumbnail":"https://i5.walmartimages.com/asr/dd55bdc2-9ce1-4044-95f3-9fa1dc88f221_1.912ef0d34bf473e074db16d013fe1088.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "customerRating": "4.7",      
    },
    "savedItems": {
      "item": "Backpack 18 inch School Student Day Pack Red",     
      "unitPrice": 15,
      "link": "https://play.google.com/store/books/details?id=NgEwCwAAQBAJ&source=gbs_api",
      "description": "double pocket bag",
      "thumbnail":"http://books.google.com/books/content?id=NgEwCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "customerRating": "4.7",      
    },
    "themes": {
      "theme1": false,
      "theme2":false,
      "theme3":true,
      "theme4": false,
      "theme5": false,
      "userImage": "https://lmtrain.github.io/lm-images/assets/images/bugatti_1.jpg",
    },
    "bookExchange": {
      "bookId": "wjXoLQ2NFzE",
      "title":  "Weapons of Math Destruction",
      "authors": "Cathy O'Neil",
      "link": "http://books.google.com/books?id=60n0DAAAQBAJ&dq=Weapons+of+Math+Destruction&hl=&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=60n0DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "description": "A former Wall Street quant sounds an alarm on the mathematical models that pervade modern life - and threaten to rip apart our social fabric We live in the age of the algorithm. Increasingly, the decisions that affect our lives - where we go to school, whether we get a loan, how much we pay for insurance - are being made not by humans, but by mathematical models.",
      "publisheddate": "2016-09-06",
      "request": true,       
      "deny": true,
    }
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
