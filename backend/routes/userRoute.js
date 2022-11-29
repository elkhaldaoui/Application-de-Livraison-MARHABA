const router = require('express').Router()
const {
    register,
    login,
    logout,
    verifyEmail
} = require('../controllers/userController')

router.post('/register', register)
router.post('/login', login)
router.get('/verify-email/:token', verifyEmail)
router.get('/logout', logout)


module.exports= router