const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then((result) => {
        console.log("Connected to MongoDB..!!");
    }).catch((err) => {
        console.log("Error connecting to MongoDB..!! => ", err);
    });

module.exports = mongoose;