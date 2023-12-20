const express = require('express');
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const ForgotPasswordUser = require('../model/forgotPasswordSchema');



const forgotPasswordRouter = express.Router();

forgotPasswordRouter.post('/', formidable(), async function (req, res) {
    try {
        let { email } = req.fields;

        if (!email) {
            return res.status(400).send('Provide email');
        }

        let user = await ForgotPasswordUser.findOne({ email });

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Generate a reset password token
        let resetToken = jwt.sign({ user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: "1h" });

        // Save the reset password token and its expiry date to the user record
        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

        await user.save();

        // Send reset password email with the token (you need to implement this part)
        // ...

        res.send('Reset password instructions sent to your email');
    } catch (error) {
        console.error('Error in forgotpassword route:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = forgotPasswordRouter;