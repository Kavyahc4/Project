const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    dateOfManufacturing: { type: Number, required: true },
    
});

module.exports = mongoose.model('Product', productSchema);
