// const express = require('express');
// const formidable = require('express-formidable');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const ForgotPasswordUser = require('../model/forgotPasswordSchema');

// const forgotPasswordRouter = express.Router();

// forgotPasswordRouter.post('/', formidable(), async function (req, res) {
//     try {
//         const { email } = req.fields;

//         if (!email) {
//             return res.status(400).send('Provide all the inputs');
//         }

//         const user = await ForgotPasswordUser.findOne({ email });

//         if (user) {
//             // User found: Generate a reset password token
//             const resetToken = jwt.sign({ user_id: user._id, email },
//                 process.env.TOKEN_KEY,
//                 { expiresIn: "1h" });

//             // Save the reset password token and its expiry date to the user record
//             user.resetPasswordToken = resetToken;
//             user.resetPasswordTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

//             await user.save();
//             return res.send('Reset password instructions sent to your email');
//         } else {
//             return res.send('User not found');
//         }
//     } catch (error) {
//         console.error('Error in ForgotPasswordUser route:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// module.exports = forgotPasswordRouter;

require('dotenv').config();
const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const ForgotPasswordUser = require('../model/forgotPasswordSchema');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
});

router.post('/', formidable(), async function (req, res) {
  try {
    const { email } = req.fields;

    if (!email) {
      return res.status(400).send('Provide all the inputs');
    }

    const user = await ForgotPasswordUser.findOne({ email });

    if (user && !user.isResetRequested) {
      // User found: Generate a reset password token
      const resetToken = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: '1h' }
      );

      // Save the reset password token and its expiry date to the user record
      user.resetPasswordToken = resetToken;
      user.resetPasswordTokenExpiry = new Date(Date.now() + 3600000); // 1 hour
      user.isResetRequested = true;
      await user.save();

      // Send reset instructions to the user's email
      const resetLink = `http://ecom.com/reset-password/${resetToken}`;
      const emailBody = `Click on the following link to reset your password: ${resetLink}`;

      // Nodemailer configuration to send email
      transporter.sendMail({
        from: 'process.env.GMAIL_USER',
        to: email,
        subject: 'Reset Password Instructions',
        text: emailBody,
      });

      return res.send('Reset password instructions sent to your email');
    } else {
      return res.send('User not found or password reset already requested');
    }
  } catch (error) {
    console.error('Error in ForgotPasswordUser route:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
