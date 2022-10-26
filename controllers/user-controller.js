const User = require('../models/User-model')
const Role = require('../models/Role-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Storage = require('local-storage')


const registerUser = asyncHandler (async (req,res)=>{
    const {first_name, last_name, email, password} = req.body

    if(!first_name || !last_name || !email || !password){
        throw new Error ('please fill all the fields')
        // res.statut(400)
        // res.send('please fill all the fields')
    }
    const userExists = await User.findOne({ email })
    if(userExists){
        throw new Error ('User alredy exists')
        // res.send('User alredy exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password ,salt)
    const role = "6351c10e2bb0acddb3872909"

    const user = await  User.create({
        first_name,
        last_name,
        email,
        password: hashedpassword,
        role 
    })
    if(user){
        res.send('user Added')
        
    }else{
        throw new Error ('Invalid User Data')
        // res.send('Invalid User Data')
    }
})
const loginUser = async (req,res) => {
    const {email, password} = req.body
    if (!email || !password){
        throw new Error ('Please fill all the fields')
        // res.send('Please fill all the fields')
    }
    const user = await User.findOne({email})
    const passwordUser = await bcrypt.compare(password, user.password)
    if(user && passwordUser){
        const token = generatetoken(user.id)
        const role = await Role.findOne({ _id: user.role})
        .then(role => {
            res.send(`/api/user/${role.name}/me`)
        })
        .catch(() => {
            res.send('error')
        })   
    }
    else{
        throw new Error ('Somthing wrong')
        // res.send('Somthing wrong')
    }
}

const generatetoken = (id) => {
    const token = jwt.sign({id}, process.env.JWT, {
        expiresIn : "30d"
    })
    Storage('token', token)

    return token;
}

module.exports = {
    registerUser,
    loginUser,
}