exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', instruction => {
       instruction.increments()

       instruction
       .integer('recipe_id')
       .unsigned().notNullable()
       .references('id')
       .inTable('recipes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')

       instruction
       .integer('step_number')

       instruction
       .string('instruction', 400)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.dropTableIfExists('instructions');
  };
