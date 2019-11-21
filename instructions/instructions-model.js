const db = require('../data/dbConfig');

const find = () => {
    return db('instructions');
};

const findByRecipeID = id => {
    return db('instructions')
        .where({recipe_id: id});
};

const add = instruction => {
    return db('instructions')
        .insert(instruction, 'id')
        .then((id) => {
            return id
        });
};

const remove = id => {
    return db('instructions')
        .where({id})
        .del();
};

const update = (id, instruction) => {
    return db('instructions')
        .where({id})
        .update(instruction)
};


module.exports = {
    find,
    findByRecipeID,
    add,
    remove,
    update
};