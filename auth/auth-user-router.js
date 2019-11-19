const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const generateToken = require('../config/generateToken');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "All Clear For Takeoff, Star Fox"})
});

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.addUser(user)
        .then(user => {
            const token = generateToken(user)
            res.status(201).json({user: user, token});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: 'server error ', error: error});
        })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findByUsername(username)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({user: user, token})
            } else {
                res.status(401).json("please make sure the credentials are valid.")
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'server error,', error: error});
        })
});

module.exports = router;