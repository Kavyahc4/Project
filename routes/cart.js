const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication');
const Cart = require('../model/cartSchema');
const Product = require('../model/productSchema');

// Add product to the cart 
router.post('/add', verifyToken, async (req, res) => {
    try {
        const userId = req.user.user_id;
        const { productId, quantity } = req.fields;

        if (!(productId && quantity)) {
            return res.status(400).send('Provide product ID and quantity');
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const userCart = await Cart.findOne({ user: userId });

        if (!userCart) {
            // Create a new cart if the user doesn't have one
            const newCart = new Cart({
                user: userId,
                items: [{ product: productId, quantity }],
            });
            await newCart.save();
        } else {
            // Update the existing cart
            const existingItem = userCart.items.find(item => item.product.equals(productId));

            if (existingItem) {
                // If the product is already in the cart, update the quantity
                existingItem.quantity += quantity;
            } else {
                // If the product is not in the cart, add it
                userCart.items.push({ product: productId, quantity });
            }

            await userCart.save();
        }

        res.send('Product added to the cart');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
