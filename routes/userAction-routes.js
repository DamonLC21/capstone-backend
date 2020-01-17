const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/user-actions', (request, response) => {
    queries
        .userActions
        .getAll()
        .then(results => { response.send(results)})
        .then(response.status(201))
})

router.post('/user-actions', (request, response) => {
    queries
        .userActions
        .createUserAction(request.body)
        .then(userAction => response.json(userAction))
})

module.exports = router