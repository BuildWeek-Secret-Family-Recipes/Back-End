const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const userAuthRouter = require('./auth/auth-user-router');
const usersRouter = require('./users/users-router');
const recipeRouter = require('./recipes/recipes-router');
const restricted = require('./middleware/restricted');
const IngredientsRouter = require('./ingredients/ingredients-router');
const InstructionsRouter = require('./instructions/instructions-router');



const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


//Login route
server.use('/api/user', userAuthRouter);

//Get all Users
server.use('/api/auth/users', usersRouter);

//GET/ADD recipe
server.use('/api/auth/recipes', restricted, recipeRouter);

//Ingredients
server.use('/api/auth/ingredients', restricted, IngredientsRouter);

//Instructions
server.use('/api/auth/instructions', InstructionsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "All Clear For Takeoff, Star Fox"})
});

module.exports = server;