const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication');
const Cart = require('../model/cartSchema');
const Order = require('../model/orderSchema');
const Product = require('../model/productSchema');

router.post('/place', verifyToken, async (req, res) => {
    try {
        const userId = req.user.user_id;
        const { productId, quantity , address } = req.fields;

        if (!(productId && quantity)) {
            return res.status(400).send('Provide product ID and quantity');
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const userCart = await Cart.findOne({ user: userId });

        if (!userCart || userCart.items.length === 0) {
            return res.status(400).send('No items in the cart');
        }

        // Ensure that price and quantity are valid numbers
        const totalAmount = userCart.items.reduce((total, item) => {
            const itemPrice = parseFloat(item.product.price);
            const itemQuantity = parseInt(item.quantity);

            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                return total + itemPrice * itemQuantity;
            } else {
                return total;
            }
        }, 0);

        // Check if there is enough stock available
        if (product.quantity < quantity) {
            return res.status(400).send('Not enough stock available');
        }

        // Create the order
        const order = await Order.create({
            customer: userId,
            items: [{ product: productId, quantity }],
            dateOfPurchase: Date.now(),
            totalAmount,
            address,
            cost: quantity * product.price
        
        });

        // Update the product quantity
        product.quantity -= quantity;
        await product.save();

        // // Clear the user's shopping cart after placing the order
        userCart.items = [];
        await userCart.save();
       

        res.json(order);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;


