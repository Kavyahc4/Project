require("dotenv").config();
const express = require('express');
const app = express();
const formidable = require('express-formidable');
require('./config/database').connect();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
let verifyToken = require('./middleware/authentication');

const PORT = process.env.API_PORT;


const RegisterUser = require('./model/registerSchema.js');
const LoginUser = require('./model/loginSchema.js');
const ForgotPasswordUser = require('./model/forgotPasswordSchema');


// Import route files
const registerRouter = require('./routes/register.js');
const loginRouter = require('./routes/login.js');
const forgotPasswordRouter = require('./routes/forgotpassword.js');

// Use middleware for parsing form data
app.use(formidable());

// Use routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forgotpassword', forgotPasswordRouter);

// Define the profile route with token verification middleware
app.get('/profile', verifyToken, function(req, res) {
    res.send('Hello welcome to FSD');
});

// Start the server
app.listen(PORT, console.log(`Project is running at ${PORT} port`));
