const express = require('express')
const router = express.Router()

    router.get('/', (request, response) => {
        response.send('The route worked')
    })

module.exports = router