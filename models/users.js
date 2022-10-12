'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema ({
    userName: { type: String, required: true },
    password: { type: String, required: true},
    email: { type: String, required: true },
    venues: [{
        id: String, required: true,
        name: String, required: true,
    }],
    artists: [{
        id: String, required: true,
        name: String, required: true,
    }],
})

const UsersModel = mongoose.model('Users', usersSchema);

module.exports = UsersModel;