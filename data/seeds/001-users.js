
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'testUser1', password: 'testPAss1', email: 'hi@bob.com'},
        {username: 'testUser2', password: 'testPAss2', email: 'Imma@gmail.com'},
        {username: 'testUser3', password: 'testPAss3', email: 'aol@hotmail.com'}
      ])
    })
};
