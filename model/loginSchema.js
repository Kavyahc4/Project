const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: { type: String, default: ''},
    password: { type: String, default: '' },
    token: { type: String, default: '' },
});

module.exports = mongoose.model('LoginUser', loginSchema);