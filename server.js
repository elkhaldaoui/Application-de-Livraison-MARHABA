const express = require('express')
require('dotenv').config()
require('./config/db')
const port = process.env.PORT || 5000

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const userRouter = require('./routes/user-router')
app.use('/api/auth', userRouter)

app.listen(port, () => console.log(`servern running ${port}`))