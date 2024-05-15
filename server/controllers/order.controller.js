const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		const order = await newOrder.save();
		res.status(200).send(order);
	} catch (err) {
		res.status(500).send(err);
	}
}

const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).send(updatedOrder);
	} catch (err) {
		res.status(500).send(err);
	}
}

const deleteOrder = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).send("Order deleted");
	} catch (err) {
		res.status(500).send(err);
	}
}

const getOrderById = async (req, res) => {
	try {
		const orders = await Order.findOne({ userId: req.params.id });
		res.status(200).send(orders);
	} catch (err) {
		res.status(500).send(err);
	}
}

const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).send(orders);
	} catch (err) {
		res.status(500).send(err);
	}
}

const getMonthlyIncome = async (req, res) => {
	const productId = req.query.pid
     const date = new Date();
     const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
     const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
     try {
          const income = await Order.aggregate([
			{
				$match: {
					createdAt: { $gte: prevMonth }, ...(productId && {
				products:{$elemMatch:{$eq:productId}}
			}) } },
               { $project:{ month:{ $month:"$createdAt" }, sales:"$amount" } },
               { $group: { _id: "$month", total: { $sum: "$sales" } } }
		]);
		res.status(200).send(income);
     } catch (err) {
          res.status(500).send(err);
     }
}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getMonthlyIncome
}


