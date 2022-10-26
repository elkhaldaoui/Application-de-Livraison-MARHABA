const { type } = require('jquery')
const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
    role : { 
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'Role',
    }
    
})

module.exports = mongoose.model('Users', userSchema)