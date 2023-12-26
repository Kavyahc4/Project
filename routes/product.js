const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication');
const formidable = require('express-formidable');
const Product = require('../model/productSchema');
const Seller = require('../model/sellerSchema');

router.post('/products',formidable() , async (req, res) => {
    try {
        const { sellerId, name, quantity, price, mrp, dateOfManufacturing } = req.fields;

        if (!(sellerId && name && quantity && price && mrp && dateOfManufacturing)) {
            return res.status(400).send('Provide all the product details');
        }

        const seller = await Seller.findById(sellerId);
        if (!seller) {
            return res.status(404).send('Seller not found');
        }

        const product = await Product.create({
            seller: sellerId,
            name,
            quantity,
            price,
            mrp,
            dateOfManufacturing,
        });

        res.json(product);
    
    } 
    
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Update product quantity and decrease seller's stock
router.post('/products/purchase', verifyToken, async (req, res) => {
    try {
        const { productId, quantity } = req.fields;

        if (!(productId && quantity)) {
            return res.status(400).send('Provide product ID and quantity');
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        if (product.quantity < quantity) {
            return res.status(400).send('Not enough stock available');
        }

        // Update product quantity
        product.quantity -= quantity;
        await product.save();

    } catch (error) {
        console.error('Error purchasing product:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
