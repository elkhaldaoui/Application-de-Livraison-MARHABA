const mongoose = require('mongoose')
const DB =  mongoose.connect(process.env.DATABASE)
    .then(()=>console.log('database connected'))
    .catch(()=> console.log('database not connected'))
module.export = DB 