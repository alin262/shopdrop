const express = require('express');
const router = express.Router();
const { getOrders, getOrder, createOrder, updateOrderStatus } = require('../controllers/orderController');

router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', createOrder);
router.patch('/:id', updateOrderStatus);

module.exports = router;