const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controller/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, notesCtrl.index)
router.post('/create', ensureLoggedIn, notesCtrl.create)

module.exports = router