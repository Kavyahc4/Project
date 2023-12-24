// const express = require('express');
// const router = express.Router();
// const verifyToken = require('../middleware/authentication');
// const Product = require('../models/product');

// // Get all products
// router.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         console.error('Error getting products:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Get a single product by ID
// router.get('/products/:id', async (req, res) => {
//     try {
//         const productId = req.params.id;
//         const product = await Product.findById(productId);

//         if (!product) {
//             return res.status(404).send('Product not found');
//         }

//         res.json(product);
//     } catch (error) {
//         console.error('Error getting product by ID:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Create a new product (admin only, requires token)
// router.post('/products', verifyToken, async (req, res) => {
//     try {
//         // Check if the user is an admin (you may implement a more sophisticated role system)
//         if (!req.user.isAdmin) {
//             return res.status(403).send('Permission denied');
//         }

//         const { name, price, description } = req.body;

//         if (!(name && price)) {
//             return res.status(400).send('Provide product name and price');
//         }

//         const product = await Product.create({
//             name,
//             price,
//             description,
//         });

//         res.json(product);
//     } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Update a product by ID (admin only, requires token)
// router.put('/products/:id', verifyToken, async (req, res) => {
//     try {
//         // Check if the user is an admin (you may implement a more sophisticated role system)
//         if (!req.user.isAdmin) {
//             return res.status(403).send('Permission denied');
//         }

//         const productId = req.params.id;
//         const { name, price, description } = req.body;

//         const product = await Product.findByIdAndUpdate(productId, {
//             name,
//             price,
//             description,
//         }, { new: true });

//         if (!product) {
//             return res.status(404).send('Product not found');
//         }

//         res.json(product);
//     } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Delete a product by ID (admin only, requires token)
// router.delete('/products/:id', verifyToken, async (req, res) => {
//     try {
//         // Check if the user is an admin (you may implement a more sophisticated role system)
//         if (!req.user.isAdmin) {
//             return res.status(403).send('Permission denied');
//         }

//         const productId = req.params.id;
//         const product = await Product.findByIdAndDelete(productId);

//         if (!product) {
//             return res.status(404).send('Product not found');
//         }

//         res.json(product);
//     } catch (error) {
//         console.error('Error deleting product:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authentication');
const formidable = require('express-formidable');
const Product = require('../model/productSchema');
const Seller = require('../model/sellerSchema');

// // Create a new seller (admin only, requires token)
// router.post('/sellers', verifyToken, async (req, res) => {
//     try {
//         // Check if the user is an admin (you may implement a more sophisticated role system)
//         if (!req.user.isAdmin) {
//             return res.status(403).send('Permission denied');
//         }

//         const { name } = req.body;

//         if (!name) {
//             return res.status(400).send('Provide seller name');
//         }

//         const seller = await Seller.create({ name });
//         res.json(seller);
//     } catch (error) {
//         console.error('Error creating seller:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// Create a new product (admin only, requires token)
router.post('/products',formidable() , async (req, res) => {
    try {
        // Check if the user is an admin (you may implement a more sophisticated role system)

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

        //Create a new order
        // const order = await Order.create({
        //     customer: req.user.user_id,
        //     product: productId,
        //     quantity,
        //     cost: quantity * product.price,
        // });

        // res.json(order);
    } catch (error) {
        console.error('Error purchasing product:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
