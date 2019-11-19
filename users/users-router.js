const express = require('express');
const Users = require('./users-model');

const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json(`Server Error, ${error}`)
        })
});

module.exports = router;
