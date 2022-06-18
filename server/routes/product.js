const router = require("express").Router();
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin,
} = require("../routes/verifyToken");
const Product = require("../models/product");

//create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
     const newProduct = new Product(req.body)
     try {
          const product = await newProduct.save();
          res.status(200).send(product);
     } catch (err) {
          res.status(500).send(err);
     }
})

//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
     try {
          const updatedProd = await Product.findByIdAndUpdate(req.params.id,{$set: req.body}, { new: true });
          res.status(200).send(updatedProd);
     } catch (err) {
          res.status(500).send(err);
     }
})

//delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
     try {
          await Product.findByIdAndDelete(req.params.id);
          res.status(200).send("Product deleted");
     }catch(err){
          res.status(500).send(err);
     }
})

//get product
router.get("/:id", async (req, res) => {
     try {
          const prod = await Product.findById(req.params.id);
          res.status(200).send(prod);
     } catch (err) {
          res.status(500).send(err);
     }
})

//get all products
router.get("/", async (req, res) => {
     const qNew = req.query.new;
     const qCategory = req.query.category;
     try {
          let products;
          if (qNew) {
               products = await Product.find().sort({ createdAt: -1 }).limit(5);
          } else if (qCategory) {
               products = await Product.find({
                    categories: {
                         $in :[qCategory]
                    }
               });
          }else {
               products = await Product.find();
          }
          res.status(200).send(products);
     } catch (err) {
          res.status(500).send(err);
     }
})

module.exports = router;
