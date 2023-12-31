const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    token: { type: String, default: '' },
    userType: { type: String, enum: ['customer', 'seller', 'admin'], default: '' },
});

module.exports = mongoose.model('RegisterUser', registerSchema);
