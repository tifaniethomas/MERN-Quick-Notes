const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controller/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const note = require('../../models/note')

router.get('/', ensureLoggedIn, notesCtrl.index)
router.post('/', ensureLoggedIn, notesCtrl.create)
router.delete('/:id', ensureLoggedIn, notesCtrl.delete)
router.get('/:id/edit', ensureLoggedIn, notesCtrl.edit)
router.post('/:id', ensureLoggedIn, notesCtrl.update)

module.exports = router