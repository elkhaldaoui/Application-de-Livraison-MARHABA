const Storage = require('local-storage')
const User = require('../models/User-model')
const Role = require('../models/Role-model')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyRoleClient = (req, res) => {
    const token = Storage('token')
    if(token){
        const tokenUser = jwt.verify(token, process.env.JWT)
        User.findById({ _id: tokenUser.id })
        .then(user => {
            Role.findOne({ _id: user.role })
            .then(role => {
                if(role.name == "client"){
                    res.send(`Hello ${user.first_name} ${user.last_name}, your role is: ${role.name}`)
                }
                else{
                    res.send('is not a user')
                }
            })
            .catch(() => {
                res.send('is not role')
            })
        })
        .catch(() => {
            res.send('not user')
        })
    }
    else{
        res.send('No token')
    }
}

const verifyRoleManager = (req, res) => {
    const token = Storage('token')
    if(token){
        const tokenUser = jwt.verify(token, process.env.JWT)
        User.findById({ _id: tokenUser.id })
        .then(user => {
            Role.findOne({ _id: user.role })
            .then(role => {
                if(role.name == "manager"){
                    res.send(`Hello ${user.first_name} ${user.last_name}, your role is: ${role.name}`)
                }
                else{
                    res.send('is not a manager')
                }
            })
            .catch(() => {
                res.send('is not role')
            })
        })
        .catch(() => {
            res.send('not manager')
        })
    }
    else{
        res.send('No token')
    }
}

const verifyRoleLivreur = (req, res) => {
    const token = Storage('token')
    if(token){
        const tokenUser = jwt.verify(token, process.env.JWT)
        User.findById({ _id: tokenUser.id })
        .then(user => {
            Role.findOne({ _id: user.role })
            .then(role => {
                if(role.name == "livreur"){
                    res.send(`Hello ${user.first_name} ${user.last_name}, your role is: ${role.name}`)
                }
                else{
                    res.send('is not a livreur')
                }
            })
            .catch(() => {
                res.send('is not role')
            })
        })
        .catch(() => {
            res.send('not livreur')
        })
    }
    else{
        res.send('No token')
    }
}

module.exports = {
    verifyRoleClient,
    verifyRoleManager,
    verifyRoleLivreur
}