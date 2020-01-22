
exports.up = function(knex) {
  return knex.schema.createTable('user-actions', (userAction) => {
      userAction.increments()
      userAction.integer('user_id')
      userAction.foreign('user_id').references('id').inTable('users')
      userAction.integer('action_id')
      userAction.foreign('action_id').references('id').inTable('actions')
      userAction.date('dateCompleted').defaultsTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user-actions')
};
