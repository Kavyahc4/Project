const express = require('express');
const formidable = require('express-formidable');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const LoginUser = require('../model/loginSchema');

const loginRouter = express.Router();

loginRouter.post('/', formidable(), async function (req, res) {
    try {
        let { email, password } = req.fields;

        if (!(email && password)) {
            return res.status(400).send('Provide all the inputs');
        }

        let user = await LoginUser.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            let token = jwt.sign({ user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "5h" });

            user.token = token;
            await user.save(); // Save the updated token
            res.json(user);
        } else {
            res.status(403).send("Incorrect username or password");
        }
    } catch (error) {
        console.error('Error in login route:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = loginRouter;