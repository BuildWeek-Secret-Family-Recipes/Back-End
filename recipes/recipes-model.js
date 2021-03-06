const db = require('../data/dbConfig');

const find = () => {
    return db('recipes')
    ;
};

const findByRecipeID = id => {
    return db('recipes')
        .where({id: id})
        ;
}

const findByUserID = id => {
    return db('recipes')
        .where({user_id: id});
};

const add = recipe => {
    return db('recipes')
        .insert(recipe, 'id')
        .then((id) => {
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
    findByRecipeID,
    findByUserID,
    add,
    remove,
    update
};