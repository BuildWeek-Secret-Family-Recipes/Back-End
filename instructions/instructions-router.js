const express = require('express');
const Instructions = require('./instructions-model');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const router = express.Router();

router.get('/', (req, res) => {
    Instructions.find()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json("server error. let me know");
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    let token = req.headers.authorization;
    let decoded = jwt.verify(token, secrets.jwtSecret);
    Instructions.findByRecipeID(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json('server error, let me know');
        });
});

router.post('/', (req, res) => {
    let token = req.headers.authorization;
    let decoded = jwt.verify(token, secrets.jwtSecret);
    let instruction = req.body;

    Instructions.add(instruction)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            res.status(500).json({message : 'server error', error: error })
        })
});

router.put('/:id', (req, res) => {
    Instructions.update(req.params.id, req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json({message : 'server error', error: error });
        });
});

router.delete('/:id', (req, res) => {
    Instructions.remove(req.params.id)
        .then(response => {
            res.status(200).json({response: response, message: 'instruction successfully deleted'});
        })
        .catch(error => {
            res.status(500).json({message : 'server error', error: error })
        });
});

module.exports = router;