const User = require('../models/User-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const regiterUser = async (req,res)=>{
    const {first_name, last_name, email, password} = req.body

    if(!first_name || !last_name || !email || !password){
        // res.statut(400)
        res.send('please fill all the fields')
    }
    const userExists = await User.findOne({ email })
    if(userExists){
        res.send('User alredy exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password ,salt)

    const user = await  User.create({
        first_name,
        last_name,
        email,
        password: hashedpassword,
    })
    if(user){
        res.send('user Added')
        
    }else{
        res.send('Invalid User Data')
    }
}

const loginUser = async (req,res)=>{
    const {email, password} = req.body
    if (!email || !password){
        res.send('Please fill all the fields')
    }
    const user = await User.findOne({email})
    const passwordUser = await bcrypt.compare(password, user.password)

    if(user && passwordUser){
        res.json({
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token: generatetoken(user.id)
        })
    }
    else{
        res.send('Somthing wrong')
    }
}

const generatetoken = (id) => {
    const token = jwt.sign({id}, process.env.JWT, {
        expiresIn : "30d"
    })

    return token;
}

module.exports = {
    regiterUser,
    loginUser,
}