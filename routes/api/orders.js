const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

  // Matches with "/api/orders/:id"
  router
  .route("/current/:id")
  .put(ordersController.update)
  // .post(cartController.create)
  console.log("FROM SERVER API ROUTE CART BY DB ID ====", ordersController.update)

  // router
  // .route("/:id")
  // .get(cartController.findById)
  // .post(cartController.create)
  // .put(cartController.update)  
  // .delete(cartController.remove);
  // console.log("FROM SERVER API ROUTE CART BY DB ID ====", cartController.update)

  
  

module.exports = router;
