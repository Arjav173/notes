const Notes = require('../models/notes.model');

const getNotes= async(req,res)=>{
    const notes = await Notes.find({user:req.user._id}).sort({ createdAt: -1 });
    res.status(200).json(notes);
}
const getNote = async(req,res)=>{
    const note = await Notes.findOne({
        _id:req.params.id,
        user:req.user._id
    })
    if(!note) res.status(404).json({message:"Not found"})
    
    res.status(200).json(note);
}

module.exports = {getNotes,getNote};