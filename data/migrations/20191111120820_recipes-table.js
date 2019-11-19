
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', recipe => {
      recipe.increments();

      recipe
      .string('name', 64)
      .notNullable()

      recipe
      .string('type_of_meal', 14)
      .notNullable()

      recipe
      .string('original_author', 64)
      .notNullable()

      recipe
      .integer('user_id', 32)
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('recipes');
};
