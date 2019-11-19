exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', ingredient => {
       ingredient.increments()

       ingredient
       .string('name', 48)
       .notNullable()

       ingredient
       .string('quantity', 4)
       .notNullable()
       
       ingredient
       .string('measurement', 48)
       .notNullable()

       ingredient
       .integer('recipe_id')
       .unsigned().notNullable()
       .references('id')
       .inTable('recipes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.dropTableIfExists('ingredients');
  };