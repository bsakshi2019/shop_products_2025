const express=require('express');
const Product=require('../models/products');
const { getProducts, getProduct, createProducts, updateProduct, deleteProduct} = require('../controllers/products.controllers');
const router=express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct)
router.post('/', createProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports=router;