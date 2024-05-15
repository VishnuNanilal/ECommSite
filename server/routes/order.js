const router = require("express").Router();
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin,
} = require("../routes/verifyToken");
const Order = require("../models/order");
const orderCtrl = require("../controllers/order.controller")

//create
router.post("/", verifyToken, orderCtrl.createOrder);

//update
router.put("/:id", verifyTokenAndAdmin, orderCtrl.updateOrder);

//delete
router.delete("/:id", verifyTokenAndAdmin, orderCtrl.deleteOrder);

//get user orders
router.get("/find/:id", verifyTokenAndAuth, orderCtrl.getOrderById);

//get all
router.get("/", verifyTokenAndAdmin, orderCtrl.getAllOrders);

//get monthly income
router.get("/income", verifyTokenAndAdmin, orderCtrl.getMonthlyIncome)

module.exports = router;
