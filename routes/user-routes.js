const express = require('express')
const router = express.Router()
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = "stuff"



    router.get('/users', (request, response) => {
        queries
            .user
            .getAll()
            .then(results => { response.send(results)})
            .then(response.status(201))
    })

    router.post('/users', (request, response) => {
        // if(queries.user.findUser(request.body)){
        //     response.send("Username already exists")
        // }
        // else{
        //     queries.user.createUser(request.body)
        //     .then(user => response.json(user))
        // }  
        queries.user.createUser(request.body)
            .then(user => response.json(user))
    })

    router.post('/login', (request, response) => {
        queries
            .login
            .authorizeUser(request.body)
            .then(user => {
                if(!user){
                    response.status(401).json({ error: "No user with that username."})
                } else {
                    return bcrypt
                        .compare(request.body.password, user.password_digest) 
                        .then(isAuthenticated => {
                            if(!isAuthenticated){
                            response.status(401).json({ error: "Incorrect password, please try again."})
                        } else {
                            return jwt.sign(user, SECRET, (error, token) => {
                                response.status(200).json({ token })
                            })
                        }
                    })
                }
            })
    })


module.exports = router