const router = require("express").Router();
const userRoutes = require("./users");
const cartRoutes = require("./cart");
const ordersRoutes = require("./orders");
const saveditemsRoutes = require("./saveditems");
const walmartRoutes = require("./walmart");

// User routes
router.use("/users", userRoutes);

// Item routes
router.use("/cart", cartRoutes);
router.use("/saveditems", saveditemsRoutes);
router.use("/walmart", walmartRoutes);

module.exports = router;
