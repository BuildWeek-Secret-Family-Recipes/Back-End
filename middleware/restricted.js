const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if(err) {
                res.status(401).json("Invalid Credentials were passed in. Check your username and password to ensure it was a valid user.");
            } else {
                next();
            }
        })
    } else {
        res.status(401).json("No token was provided, check to make sure you are passing the token in the header.")
    }
}