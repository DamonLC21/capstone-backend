
exports.up = function(knex) {
  return knex.schema.createTable('actions', (action) => {
      action.increments('id')
      action.string('title').notNullable().defaultsTo('')
      action.text('description', 'longtext').defaultsTo('')
      action.integer('reward').defaultsTo(0)
      action.string('link').defaultsTo('')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('actions')
};
