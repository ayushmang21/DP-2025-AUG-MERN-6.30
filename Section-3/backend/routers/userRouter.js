const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send("Hello from User's Add Route");
});

module.exports = router;