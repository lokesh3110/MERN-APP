const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number
    },

}, {timestamps: true})  // data saved in database with time and date

// create model/collection
const User = mongoose.model('User', userSchema);

module.exports = User;