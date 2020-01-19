const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)
const bcrypt = require('bcrypt')

module.exports = {
    user: {
        getAll: () => {
            return database('users')
            .then(users => {
                const promises = users.map(user => {
                    return database('user-actions')
                        .join('actions', 'actions.id', 'user-actions.action_id')
                        .where('user_id', user.id)
                        .then(actions => {
                            user.actions = actions
                            return database('avatars')
                                .where({id: user.avatar_id})
                                .first()
                                .then(avatar => {
                                    user.avatar = avatar
                                    return user
                                })
                        })
                })
                return Promise.all(promises)
            })
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
    },
    action: {
        getAll: () => {
            return database('actions')
        }
    },
    userActions: {
        getAll: () => {
            return database('user-actions')
        },
        createUserAction: (userAction) => {
            return database('user-actions')
                .insert(userAction)
                .returning('*')
        }
    }
}