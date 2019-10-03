const db = require("../models");

// Defining methods for the itemsController
module.exports = {
  findAll: function(req, res) {
    db.SavedItems
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    console.log("USERNAME IN FINDBYID IN=====", req.params.memberId)
    db.SavedItems
      .find({userName : req.params.memberId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    console.log("ITEMS INTO THE SAVED ITEMS=====", req.body)
    console.log("ID IN PARAMS IN SAVED ITEMS CONTROLLER=====", req.params.id)
    return db.SavedItems.create(req.body) 
      .then(function(dbsaveditems) {
        return db.User.findOneAndUpdate({ _id: req.params.id }, {saveditems: dbsaveditems._id}, {new:true}, req.body)
    })
      .then(dbsaveditems => res.json(dbsaveditems))
      .catch(err => {
        console.error('Error creating the cart!', err);
        return res.status(422).json(err)
      });
  },
  
  // create: function(req, res) {
  //   console.log("ID IN PARAMS IN SAVED ITEMS CONTROLLER=====", req.params.id)
  //   console.log("ITEMS INTO THE SAVED ITEMS=====", req.body)   
  //     db.Cart.create(req.body)
  //   .then(function(dbCart) {
  //     return db.User.findOneAndUpdate({ _id: req.params.id }, { saveditems: dbCart._id }, { new: true });
  //   })
  //   .then(function(dbUser) {
  //     res.json(dbUser);
  //   })
  //   .catch(function(err) {
  //     res.status(422).json(err);
  //   });
    
  // },


  
  remove: function(req, res) {
    db.SavedItems
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
