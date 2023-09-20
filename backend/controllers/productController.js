import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

/** 
 * @desc Fetch all products
 * @route GET /api/products
*/
const getProducts = asyncHandler (async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

/** 
 * @desc Fetch single product
 * @route GET /api/products/:id
*/
const getProductById = asyncHandler (async (req, res) => {
    const products = await Product.findById(req.params.id);

    if (products) {
        res.json(products);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

export { getProducts, getProductById };
