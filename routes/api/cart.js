const router = require("express").Router();
const cartController = require("../../controllers/cartController");

// Matches with "/api/cart"
// router.route("/")
// .get(cartController.findAll)
// .put(cartController.update);
// .post(cartController.create);
// console.log("FROM SERVER API updateUser ====", cartController.update)

// Matches with "/api/users/:id"
// router
// .route("/current/")
// .get(cartController.findById)

// router
//   .route("/:id")
//   .get(cartController.findById)
//   .put(cartController.update)
//   .delete(cartController.remove);
  // console.log("FROM SERVER API ROUTE GETUSER BY ID ====", cartController.findById)

  router
  .route("/:id")
  // .get(cartController.findById)
  // .post(cartController.create)
  .put(cartController.update)  
  .delete(cartController.remove);
  console.log("FROM SERVER API ROUTE CART BY DB ID ====", cartController.create)

  
  

module.exports = router;
