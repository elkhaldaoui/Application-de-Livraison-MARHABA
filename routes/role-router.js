const router = require('express').Router()

const verifyRole = require('../middelware/verifyRole')

router.get('/client/me', verifyRole.verifyRoleClient)
router.get('/Livreur/me', verifyRole.verifyRoleLivreur)
router.get('/manager/me', verifyRole.verifyRoleManager)

module.exports = router