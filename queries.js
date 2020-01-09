const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
    user: {
        getAll: () => {
            return database('users')
        }
    },
    avatar: {
        getAll: () => {
            return database('avatars')
        }
    }
}