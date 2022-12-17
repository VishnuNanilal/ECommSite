const express = require('express');
const app = express();
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Accessing the path module
const path = require("path");

dotenv.config();

//routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const cartRoutes = require("./routes/cart");
const stripeRoutes = require("./routes/stripe");

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB connection successful");
	})
	.catch((err) => {
		console.log(err);
	});

const PORT = 5000 || process.env.PORT;
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())

app.get("/", (req, res) => {
     console.log("Hello World");
})

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/checkout', stripeRoutes);

app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`)
})

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static('client/build'));
	 app.use(express.static("admin/build"));
 app.get('*', (req, res) => {
	 res.sendFile(path.join(__dirname + '/client/build/index.html'));
	 res.sendFile(path.join(__dirname + "/admin/build/index.html"));
 });
}



// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });