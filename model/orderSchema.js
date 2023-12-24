
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number ,required: true},
    cost : { type : Number , required : true}
});
module.exports = mongoose.model('Order', orderSchema);