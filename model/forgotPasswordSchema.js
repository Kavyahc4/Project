
const mongoose = require('mongoose');

const forgotPasswordSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String, 
  resetPasswordToken: String,
  resetPasswordTokenExpiry: Date,
});

const ForgotPasswordUser = mongoose.model('ForgotPasswordUser', forgotPasswordSchema);

module.exports = ForgotPasswordUser;
