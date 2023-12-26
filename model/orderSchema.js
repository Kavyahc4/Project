const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    dateOfPurchase: { type: Number },
    totalAmount: { type: Number ,required: true},
    cost : { type : Number , required : true},
    address: { type: String, required: true },
});
module.exports = mongoose.model('Order', orderSchema);