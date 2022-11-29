const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Storage = require('local-storage')
const User = require('../models/userModel')
const minMail = require('../middleware/mailer')

const register = async(req, res) => {
    const { username, email, password } = req.body
    
    if (username === '' || email === '' || password === '' ) {
        res.status(400).send('Please fill all the fields')
    }
    
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).send('User Déja Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const password_Hashed = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: password_Hashed,
        verification: false
    })

    if(user){
        minMail.main('verify-email', email)
        res.send('check your email')
    }

    if(!user){
        res.send('Invalid User Data')
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    if(email == '' || password == '') res.status(400).send('Please fill all the fields')

    else{
        const user = await User.findOne({email})
        if(!user) res.send('Email or password incorrect')
        else if(!user.verification) res.send('check your email to active your acount')
        else{
            const compare_password = await bcrypt.compare(password, user.password)
            if(user && compare_password){
                const token = generateToken(user.id)
                Storage('token', token)
                res.json({
                    username: user.username,
                    email: user.email,
                    token: token
                })
            }
            else res.send('Invalid crendtials')
        }
    }
}


const verifyEmail = async (req, res) => {
    const verify_email = await jwt.verify(req.params.token, process.env.SECRET)

    const verifyUser = await User.findOne({ email: verify_email.email })
    if(verifyUser && verifyUser.verification === true ) res.redirect('http://localhost:3000/login')

    const verification_email = await User.updateOne({ email: verify_email.email }, { $set: { verification: true }})
    if(verification_email) res.redirect('http://localhost:3000/login')
    if(!verification_email) res.send("You can't to active you acount")
}


const logout = async (req, res) => {
    Storage.clear()
    res.send('Your are logout')
}

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: '30d'
    })

    return token
}

module.exports = {
    register,
    login,
    verifyEmail,
    logout
}