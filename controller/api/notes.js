const Note = require('../../models/note')

module.exports = {
    index,
    create,
    delete: deleteNote,
    edit,
    update
}

async function index (req, res) {
    try {
        const notes = await Note.find({ user: req.user._id})

        res.json(notes)
    } catch (err) {
        console.log(err)
    res.status(400).json(err)} 
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        
        const note = await Note.create(req.body)

        res.json("")
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteNote(req, res) {
    try {
        const note = await Note.findOneAndDelete({"id": req.params.id})
        res.json(note)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}

async function edit(req, res) {
    try {
        console.log('hit')
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}

async function update(req, res) {
    try {
        console.log('hit')
    } catch (err) {
        console.log(err)
        res.status(400).json(err)  
    }
}