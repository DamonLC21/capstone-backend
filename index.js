const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./routes/user-routes')
const avatarRouter = require('./routes/avatar-routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(cors())
app.use(bodyParser.json())

app.use(userRouter)
app.use(avatarRouter)
