const mongoose = require('mongoose')

const db = mongoose.connect(process.env.DB_URL, ()=>console.log('db connected'))


module.exports = db