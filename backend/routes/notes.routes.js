const express = require('express');
const router = express.Router();
const {createNote} = require('../controllers/create.control');
const {protect} = require('../middlewares/auth.middleware')
const {getNotes,getNote}= require('../controllers/read.control')
const {update} = require('../controllers/update.control')
const {deleteNote} = require('../controllers/delete.control')
router.post('/create',protect,createNote);
router.get('/readAll',protect,getNotes);
router.get('/readOne',protect,getNote);
router.put('/update',protect,update);
router.delete('/delete',protect, deleteNote);

module.exports = router;
