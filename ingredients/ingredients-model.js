const db = require('../data/dbConfig');

const find = () => {
    return db('ingredients');
};

const findByRecipeID = id => {
    return db('ingredients')
        .where({recipe_id: id});
};

const add = ingredient => {
    return db('ingredients')
        .insert(ingredient, 'id')
        .then((id) => {
            return id
        });
};

const remove = id => {
    return db('ingredients')
        .where({id})
        .del();
};

const update = (id, ingredient) => {
    return db('ingredients')
        .where({id})
        .update(ingredient)
};


module.exports = {
    find,
    findByRecipeID,
    add,
    remove,
    update
};