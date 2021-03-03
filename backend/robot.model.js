const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Robot = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    attack: {
        type: String
    },
    defense: {
        type: String
    }
});

module.exports = mongoose.model('Robot', Robot);