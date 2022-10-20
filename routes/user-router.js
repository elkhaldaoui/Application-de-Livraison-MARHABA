const router = require('express').Router()
const { regiterUser, loginUser} = require('../controllers/User-controller')

router.post('/register',regiterUser)
router.post('/login',loginUser)

module.exports = router 