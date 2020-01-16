const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/actions', (request, response) => {
    queries
        .action
        .getAll()
        .then(results => { response.send(results)})
        .then(response.status(201))
})

module.exports = router