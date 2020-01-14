const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)
const bcrypt = require('bcrypt')
const { body } = require('express-validator')

module.exports = {
    user: {
        getAll: () => {
            return database('users')
        },
        createUser: (user) => {
            return bcrypt.hash(user.password, 12)
                .then(hash =>{
                    return database('users')
                        .insert({
                            username: user.username.toLowerCase(),
                            password_digest: hash,
                            zipcode: user.zipcode, 
                            avatar_id: user.avatar_id
                        })
                        .returning(['id', 'username'])
                        .then(users => users[0])
                })
            
        }

    },
    avatar: {
        getAll: () => {
            return database('avatars')
        }
    },
    login: {
        authorizeUser: (user) => {
            return database('users')
                .where({username: user.username})
                .first()
        }
    }
}