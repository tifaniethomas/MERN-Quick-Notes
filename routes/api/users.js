const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controller/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)

module.exports = router