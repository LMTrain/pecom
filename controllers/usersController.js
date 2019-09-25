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
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  find: function(req, res) {
    // var auth = Buffer.from(req.headers.authorization.split(' ')[1], 'base64');
    // var userName = auth[0];
    // var password = auth[1];
    console.log(req.body.userName, req.body.password);

    db.User.find({"userName" : req.body.userName}, function(error, data){
      if(error) throw error
      if(data.length !== 0){
        console.log("REQ.BODY", req.body)
        console.log("DATA FROM DB", data)
        console.log("HASHED PASSWORD FROM DB", data[0]._doc.password);
        // for (var i = 0; i < data.length; i++) {
        //   console.log("THIS IS DATA  :=" + data[i].password)
        // }
        // console.log("ARRAY", userArrayInfo)
                
        // console.log("DATAAAAA", data[0].password)   
        // var hash = req.body.password;
          // console.log('USER DOES NOT EXIST', data)
        // console.log('HASH', hash)
        //   if(bcrypt.compareSync(req.body.password, hash)) {
        // console.log(data);
        
        return res.json({data,
          // "data": "You can't create data",
          "error": "YOU ARE IN"
        })
        } else {
          console.log('USER DOES NOT EXIST', data)
          // console.log('USER EXIST')
          // console.log('hash:', hash)
          return res.json({data,
            // "data": "YOU ARE IN",
            "error": "USER DOES NOT EXIST"
          })
        }
      })
          

    // db.User.collection
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
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

  // update: function(req, res) {
  //   db.User
  //     .save({"memberId" : req.body.memberId, 'userTheme' : req.body.userTheme})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  update: function(req, res) {
    console.log("memberId", req.body.memberId)
    db.User.find({"memberId" : req.body.memberId}, function(error, data){
      if(error) throw error
        if(data.length === 0){
          console.log('data', data)
        return res.json({
            "data": "You can't create data",
            "error": "User does not exist"
          })
        }else{
          // console.log('THEME', data)
          console.log("memberId", req.body.memberId)
          console.log("userTheme", req.body.userTheme)
          db.User.collection
            .updateOne( { "memberId": req.body.memberId }, {$set: {"userTheme": req.body.userTheme}})
            // .save({"memberId" : req.body.memberId, 'userTheme' : req.body.userTheme})
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
