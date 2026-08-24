const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: string,
    },
    email: {
        unique: true,
        type: email,
        required: true,
    },
    password: {
        type: text,
        required: true,
    },
    username: {
        type: text,
        require: true,
        umique: true,
    }
})

module.exports = mongoose.model('User',userSchema)