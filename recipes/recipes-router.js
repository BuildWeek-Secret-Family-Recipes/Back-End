const express = require('express');
const Recipes = require('./recipes-model');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const checkRecipeData = require('../middleware/checkRecipeData');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json("server error. let me know");
        });
});

router.get('/user', (req, res) => {
    let token = req.headers.authorization;
    let decoded = jwt.verify(token, secrets.jwtSecret);
    Recipes.findByUserID(decoded.subject)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json('server error, let me know');
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Recipes.findByRecipeID(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json("server error. let me know");
        });
})

router.post('/', checkRecipeData, (req, res) => {
    let token = req.headers.authorization;
    let decoded = jwt.verify(token, secrets.jwtSecret);
    let recipe = req.body;

    recipe.user_id = decoded.subject;
    Recipes.add(recipe)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            res.status(500).json({message : 'server error', error: error })
        })
});

router.put('/:id', checkRecipeData, (req, res) => {
    Recipes.update(req.params.id, req.body)
        .then(
            Recipes.findByRecipeID(req.params.id)
                .then(response => {
            res.status(200).json(response);
            })
            .catch(error => {
                res.status(500).json({message: "server error. let me know loooooool", error: error});
            })
        )
        .catch(error => {
            res.status(500).json({message : 'server error', error: error });
        });
});

router.delete('/:id', (req, res) => {
    Recipes.remove(req.params.id)
        .then(response => {
            res.status(200).json({response: response, message: 'Recipe successfully deleted'});
        })
        .catch(error => {
            res.status(500).json({message : 'server error', error: error })
        });
});

module.exports = router;