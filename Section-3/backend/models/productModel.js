const { Schema, model } = require('../connection');

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Boolean, required: true },
    category: { type: String, required: true },
    addedAt: { type: Date, default: Date.now }
});

module.exports = model('Products', productSchema);
// the collection will be named 'product' in the database.