const Notes = require('../models/notes.model')

const createNote = async (req,res)=>{
    const{title,description} = req.body;
    const note = await Notes.create({
        title,
        description,
        user:req.user._id,
    })
    return res.status(200).json({message:'note created',note});
}

module.exports = {createNote}
