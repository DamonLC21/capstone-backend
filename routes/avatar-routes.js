const express = require('express')
const router = express.Router()
const queries = require('../queries')

    router.get('/avatars', (request, response) => {
        queries
            .avatar
            .getAll()
            .then(results => { response.send(results)})
            .then(response.status(201))
    })

module.exports = router