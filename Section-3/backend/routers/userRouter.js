const express = require('express');

const Model = require('../models/userModel')

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
});

module.exports = router;