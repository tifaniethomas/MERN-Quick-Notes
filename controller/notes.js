const Note = require('../models/note')

module.exports = {
    index,
}

async function index (req, res) {
    try {
        const notes = await Note.find({"user": req.user._id})

        res.json(notes)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    try {
        req.body.users = req.user._id
        req.body.text = req.body.text
        
        const note = await Note.create(req.body)

        res.json()
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}