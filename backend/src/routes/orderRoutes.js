const express=require('express');
const router=express.Router();
const {getOrder,getOrders,updateOrderStatus,createOrder}=require('../controllers/orderController');

router.get('/:id',getOrder);
router.get('/',getOrders);
router.post('/',createOrder);
router.patch('/:id',updateOrderStatus);

module.exports=router;