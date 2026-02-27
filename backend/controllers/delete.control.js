const notes = require('../models/notes.model')

const deleteNote = async(req,res)=>{
    const note = notes.findOne({
        _id:req.params.id,
        user:req.user._id
    })
    await note.deleteOne();
    res.status(200).json({message:"Note deleted"})
}
module.exports = {deleteNote};
