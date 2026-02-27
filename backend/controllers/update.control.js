const notes = require('../models/notes.model')

const update = async (req,res)=>{
    const note = await notes.findOne({
         _id: req.params.id,
        user: req.user._id
    })
    if(!note)return res.status(404).json({message:"not found"})
    note.title = req.body.title || note.title
    note.description = req.body.description || note.description

    const updatedNote = await note.save()
    res.status(200).json(updatedNote)
}

module.exports = {update};