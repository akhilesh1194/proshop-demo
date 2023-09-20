import express from 'express';
const router = express.Router();
import {
    getProducts,
    getProductById,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  } from '../controllers/productController.js';

router.route('/').get(getProducts);
//.post(protect, admin, createProduct);

router.route('/:id').get(getProductById);
//   .get(checkObjectId, getProductById)
//   .put(protect, admin, checkObjectId, updateProduct)
//   .delete(protect, admin, checkObjectId, deleteProduct);

export default router;