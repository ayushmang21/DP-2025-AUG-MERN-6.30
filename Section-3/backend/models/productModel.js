const { Schema, model } = require('../connection');

const productSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    city: { type: String, default: "Unknown" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('Products', productSchema);
// the collection will be named 'product' in the database.