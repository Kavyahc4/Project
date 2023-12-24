
require('dotenv').config();
const express = require('express');
const app = express();
const formidable = require('express-formidable');
const { connect } = require('./config/database');
const verifyToken = require('./middleware/authentication');
app.use(express.json());

const PORT = process.env.API_PORT || 3000;

// Import route files
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const forgotPasswordRouter = require('./routes/forgotpassword');
const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');
const sellerRouter = require('./routes/seller');
const cartRouter = require('./routes/cart');

app.use(formidable());

// Use routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forgotpassword', forgotPasswordRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/seller', sellerRouter);
app.use(express.urlencoded({ extended: true }));

// Define the profile route with token verification middleware
app.get('/profile', verifyToken, function (req, res) {
    res.send('Hello, welcome to your profile!');
});

// Start the server
connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});
