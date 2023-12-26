const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(403).send('A valid token is required to visit this URL!!');
    }

    try {
        let verify_token = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = verify_token;
        next();
    } catch {
        return res.status(403).send('A valid token is required to visit this URL!!');
    }
};

module.exports = verifyToken;
