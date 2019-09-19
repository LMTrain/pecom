const db = require("../models");
const bcrypt = require("bcrypt");

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
    let userCount;  
    try {
        userCount = await db.User.findAndCountAll({userName}).count;
        console.log('USER COUNT from db', userCount);
    } catch (err) {
        console.error(err);
        res.status(503).json({message: "Could not connect to the database"})
    }    
    if (userCount) {
        return res.status(422).json({message: "Error! The user already exists."})
        // $('.message').text('Username not found');
    }

    // Hash the user password
    let hash;
    try {
        hash = await bcrypt.hash(password, 10)
    } catch (err) {
        res.status(422).json({message: "Invalid password"})
    }

    // Create the user in the db
    let createdUser;
    try {

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
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
