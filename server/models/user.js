const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required.'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'eamil field is required.'],
    },
    phone: {
        type: String,
        required: [true, 'phone field is required.'],
        minlength: [9, 'phone minlength must be 9 ']
    },
    township: {
        type: String,
        required: [true, 'twonship field is required.']
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };