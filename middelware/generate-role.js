const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.role = require('../models/Role-model')

db.role.estimatedDocumentCount((error, count) => {
    if(!error && count === 0 ){
        new db.role({
            name : 'Manager'
        })
        .save(error =>{
            if(error){
                console.log('ERROR', error)
            }
            console.log('Add Manager to role collection')
        })

        new db.role({
            name : 'Client'
        })
        .save(error =>{
            if(error){
                console.log('ERROR', error)
            }
            console.log('Add Client to role collection')
        })

        new db .role({
            name : 'Livreur'
        })
        .save(error => {
            if(error){
                console.log('ERROR', error)
            }
            console.log('Add Livreur to role collection')
        })
    }
})