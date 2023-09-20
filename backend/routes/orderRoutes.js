import express from 'express';
const router = express.Router();
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid
  } from '../controllers/orderController.js';
import { secure, admin } from '../middleware/authMiddleware.js';


router.route('/')
    .post(secure, addOrderItems);

router.route('/myorders')
    .get(secure, getMyOrders);

router.route('/:id')
    .get(secure, getOrderById);

router.route('/:id/pay')
    .put(secure, updateOrderToPaid);


export default router;
