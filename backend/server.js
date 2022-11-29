const express = require('express')
const app = express();
const cors = require("cors")
require("dotenv").config()
require('./config/db')
require('./models/userModel')

const port = process.env.PORT || 5005

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const userRoute= require('./routes/userRoute')

app.use('/api/auth', userRoute)


app.listen(port,()=>{
    console.log(`Server is runing on ${port}`)
})


module.exports = app ;