const router = require("express").Router();
const cartController = require("../../controllers/cartController");


  // Matches with "/api/users/:id"
  router
  .route("/current/:id")
  .put(cartController.update)
  // .post(cartController.create)
  console.log("FROM SERVER API ROUTE CART BY DB ID ====", cartController.update)

  // router
  // .route("/:id")
  // .get(cartController.findById)
  // .post(cartController.create)
  // .put(cartController.update)  
  // .delete(cartController.remove);
  // console.log("FROM SERVER API ROUTE CART BY DB ID ====", cartController.update)

  
  

module.exports = router;