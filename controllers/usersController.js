const db = require("../models");
const bcrypt = require("bcrypt");
// const await = require(await)

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    // let userCount= db.User.count({"userName" : "jami@yahoo"})
    // if (userCount > 0) {
    //   console.log('USER COUNT from db is > 0'); 
    // }       
    // if (userCount) {
    //     return res.status(422).json({message: "Error! The user already exists."})
    // }
      
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    // console.log("HASH", req.body.password)
    db.User.collection
      .insertOne(req.body)
      .then(dbModel => {
        console.log("create user", dbModel)
        res.json(dbModel)})

      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
