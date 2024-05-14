const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
         const product = await newProduct.save();
         res.status(200).send(product);
    } catch (err) {
         res.status(500).send(err);
    }
}

const getProductById = async (req, res) => {
    try {
         const prod = await Product.findById(req.params.id);
         res.status(200).send(prod);
    } catch (err) {
         res.status(500).send(err);
    }
}

const getAllProductsById = async (req, res) => {
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
}

const updateProductById = async (req, res) => {
    try {
         const updatedProd = await Product.findByIdAndUpdate(req.params.id,{$set: req.body}, { new: true });
         res.status(200).send(updatedProd);
    } catch (err) {
         res.status(500).send(err);
    }
}

const deleteProductById = async (req, res) => {
    try {
         await Product.findByIdAndDelete(req.params.id);
         res.status(200).send("Product deleted");
    }catch(err){
         res.status(500).send(err);
    }
}

module.exports = {
    createProduct,
    getProductById,
    getAllProductsById,
    updateProductById,
    deleteProductById
}