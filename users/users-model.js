const db = require('../data/dbConfig');

const find = () => {
    return db('users');
};

const findByUsername = username => {
    return db('users')
        .where({username})
        .first()
};

const addUser = user => {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return db('users')
                .where({id})
                .first()
        })
};

module.exports = {
    find,
    findByUsername,
    addUser
};