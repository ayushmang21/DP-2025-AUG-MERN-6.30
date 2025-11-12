const express = require('express');

const Model = require('../models/productModel')

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
});

module.exports = router;