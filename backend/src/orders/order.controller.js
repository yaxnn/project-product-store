const Order = require("./order.model");
const createAOrder = async(req,res) => {
try {
    console.log(req.body)
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);

} catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
}
}


module.exports = {
    createAOrder,
}