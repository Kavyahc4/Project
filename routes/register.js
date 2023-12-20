
const express = require('express');
const formidable = require('express-formidable');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegisterUser = require('../model/registerSchema.js');

const registerRouter = express.Router();

registerRouter.post('/', formidable(), async function (req, res) {
    let { firstName, lastName, email, password } = req.fields;

    if (!(firstName && lastName && email && password)) {
        res.send('Provide all the inputs');
    } else {
        if (await RegisterUser.findOne({ email })) {
            res.send('User already exists');
        } else {
            let enc_password = await bcrypt.hash(password, 10);
            let user = await RegisterUser.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: enc_password
            });

            let token = jwt.sign({ user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "5h" });

            user.token = token;
            res.json(user);
        }
    }
});

module.exports = registerRouter;
