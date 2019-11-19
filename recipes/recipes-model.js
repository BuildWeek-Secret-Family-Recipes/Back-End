const db = require('../data/dbConfig');

const find = () => {
    return db('recipes');
};

const findByUserID = id => {
    return db('recipes')
        .where({user_id: id});
};

const add = recipe => {
    console.log('in the post request',recipe);
    return db('recipes')
        .insert(recipe, 'id')
        .then((id) => {
            console.log('id', id);
            return id
        });
};

const remove = id => {
    return db('recipes')
        .where({id})
        .del();
};

const update = (id, recipe) => {
    return db('recipes')
        .where({id})
        .update(recipe)
};


module.exports = {
    find,
    findByUserID,
    add,
    remove,
    update
};