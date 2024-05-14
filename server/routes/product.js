const router = require("express").Router();
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin,
} = require("../routes/verifyToken");
const Product = require("../models/product");
const productCtrl = require("../controllers/product.controller")

//create
router.post("/", verifyTokenAndAdmin, productCtrl.createProduct);

//update
router.put("/:id", verifyTokenAndAdmin, productCtrl.updateProductById);

//delete
router.delete("/:id", verifyTokenAndAdmin, productCtrl.deleteProductById);

//get product
router.get("/:id", productCtrl.getProductById);

//get all products
router.get("/", productCtrl.getAllProductsById);

module.exports = router;
