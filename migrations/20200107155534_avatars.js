
exports.up = function(knex) {
    return knex.schema.createTable('avatars', (avatar) => {
        avatar.increments('id')
        avatar.string('name').notNullable().defaultsTo('')
        avatar.string('image').notNullable().defaultsTo('')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('avatars')
};
