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
  db.User.find({"userName" : req.body.userName}, function(error, data){
    if(error) throw error
      if(data.length !== 0){
        console.log('data', data)
      return res.json({
          "data": "You can't create data",
          "error": "Email already exist"
        })
      }else{
        console.log('there is no data', data)
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        // console.log("HASH", req.body.password)
        db.User.collection
          .insertOne(req.body)
          .then(dbModel => {
            console.log("create user", dbModel)
            res.json(dbModel)})
    
          .catch(err => res.status(422).json(err));;
      }

    })
   
  },

  update: function(req, res) {
    db.User.find({"memberId" : req.body.memberId}, function(error, data){
      if(error) throw error
        if(data.length !== 0){
          console.log('data', data)
        return res.json({
            "data": "You can't create data",
            "error": "User does not exist"
          })
        }else{
          console.log('THEME', data)
          db.User
            .UpdateOne(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
    })
  },
  remove: function(req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
