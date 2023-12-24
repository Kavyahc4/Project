const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: { type: String },
    products: { type: Number, default: 0},
       
});

module.exports = mongoose.model('Seller', sellerSchema);
