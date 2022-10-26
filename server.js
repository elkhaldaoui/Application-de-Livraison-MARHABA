const express = require('express')
require('dotenv').config()
require('./config/db')
const port = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const { errorHandler } = require('./middelware/error-Handler')
app.use(errorHandler)


const userRouter = require('./routes/user-router')
const roleRouter = require('./routes/role-router')
require('./middelware/generate-role')


app.use('/api/auth', userRouter)
app.use('/api/user', roleRouter)

app.listen(port, () => console.log(`servern running ${port}`))