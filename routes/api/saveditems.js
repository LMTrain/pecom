const router = require("express").Router();
const saveditemsController = require("../../controllers/saveditemsController");


  router
  .route("/")
  .post(saveditemsController.create)
  

  
  

module.exports = router;
