const Order = require("../models/Order");

const handleError = (res, e) => {
    res.status(500).json({ message: e.message });
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('products.product');
        res.json(orders);
    } catch (e) {
        handleError(res, e);
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products.product');
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order)
    } catch (e) {
        handleError(res, e);
    }
}

const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (e) { handleError(res, e) }
}
const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id, {
            status: req.body.status
        },
            { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (e) {
        handleError(res, e)
    }
}
module.exports={getOrder,getOrders,updateOrderStatus,createOrder}