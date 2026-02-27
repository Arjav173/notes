const express = require('express');
const router = express.Router();
const {createNote} = require('../controllers/create.control');
const {protect} = require('../middlewares/auth.middleware')

router.post('/create',protect,createNote);

module.exports = router;
