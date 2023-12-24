const express = require('express');
const formidable = require('express-formidable');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const LoginUser = require('../model/loginSchema');

const loginRouter = express.Router();

loginRouter.post('/', formidable(), async function (req, res) {
try {
    const {  email, password } = req.fields;

    if (!( email && password)) {
        return res.status(400).send('Provide all the inputs');
    }

    if (await LoginUser.findOne({ email })) {
        return res.send('User already exists');
    }

    const enc_password = await bcrypt.hash(password, 10);
    const user = await LoginUser.create({
        email: email,
        password: enc_password
    });

    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, { expiresIn: "5h" });

    user.token = token;
    await user.save();

    res.json(user);
} 

catch (error) {
    console.error('Error in login route:', error);
    res.status(500).send('Internal Server Error');
}
});

module.exports = loginRouter;