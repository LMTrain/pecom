const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create)
.put(usersController.update);
// console.log("FROM SERVER API updateUser ====", usersController.update)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  // .put(usersController.update)
  .delete(usersController.remove);

  router
  .route("/login")
  .post(usersController.find)
  // .put(usersController.update)
  

module.exports = router;
