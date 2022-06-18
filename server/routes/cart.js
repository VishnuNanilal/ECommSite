const router = require("express").Router();
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin,
} = require("../routes/verifyToken");
const Cart = require("../models/cart");

//create
router.post("/", verifyToken, async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const cart = await newCart.save();
		res.status(200).send(cart);
	} catch (err) {
		res.status(500).send(err);
	}
});

//update
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).send(updatedCart);
	} catch (err) {
		res.status(500).send(err);
	}
});

//delete
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).send("Cart emptied");
	} catch (err) {
		res.status(500).send(err);
	}
});

//get user cart
router.get("/find/:id", verifyTokenAndAuth, async (req, res) => {
	try {
          const cart = await Cart.findOne({ userId: req.params.id });
		res.status(200).send(cart);
	} catch (err) {
		res.status(500).send(err);
	}
});

//get all 
router.get("/",verifyTokenAndAdmin, async (req, res) => {
	try {
          const carts = await Cart.find();
          res.status(200).send(carts);
     } catch (err) {
          res.status(500).send(err);
     }
});

module.exports = router;
