const mongoose = require('mongoose');

// Define the Games schema
const GameSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    type: { type: Array, required: true }
});

// Create a model from the schema
const Games = mongoose.model('Games', GameSchema);

module.exports = Games;
