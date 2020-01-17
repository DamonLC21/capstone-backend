
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user-actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('user-actions').insert([
        {user_id: 40, action_id: 1}
        
      ]);
    });
};
