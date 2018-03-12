
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('poses', function (table) {
    table.increments()
    table.string('name')
    table.string('type')
    table.string('difficulty')
    table.integer('numPpl')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poses')
};
