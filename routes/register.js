
const express = require('express');
const formidable = require('express-formidable');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegisterUser = require('../model/registerSchema');

const registerRouter = express.Router();

registerRouter.post('/', formidable(), async function (req, res) {
    try {
        const { firstName, lastName, email, password } = req.fields;

        if (!(firstName && lastName && email && password)) {
            return res.status(400).send('Provide all the inputs');
        }

        if (await RegisterUser.findOne({ email })) {
            return res.send('User already exists');
        }

        const enc_password = await bcrypt.hash(password, 10);
        const user = await RegisterUser.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: enc_password,
            userType: 'customer', // or 'seller' or 'admin'
        });

        const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, { expiresIn: "5h" });

        user.token = token;
        await user.save();
        console.log('User registered successfully:', user);
        res.json(user);
    } catch (error) {
        console.error('Error in registration route:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = registerRouter;
