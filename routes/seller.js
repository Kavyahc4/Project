

const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const Seller = require('../model/sellerSchema');
const Product = require('../model/productSchema');

// Create a new seller
router.post('/sellers',formidable(), async (req, res) => {
    try {
        // You may add additional checks or validations if needed

        const {name ,products} = req.fields;

        if (!name) {
            return res.status(400).send('Provide seller name');
        }

        const seller = await Seller.create({ name ,products});
        res.json(seller);
    } catch (error) {
        console.error('Error creating seller:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
