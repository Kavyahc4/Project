
const mongoose = require('mongoose');

const forgotPasswordSchema = new mongoose.Schema({
    email: { type: String, default: '' },
    resetPasswordToken: { type: String, default: '' },
    resetPasswordTokenExpiry: { type: Date, default: null },
});

module.exports = mongoose.model('ForgotPasswordUser', forgotPasswordSchema);

