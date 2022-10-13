'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema ({
    userName: { type: String, required: true },
    password: { type: String, required: true},
    email: { type: String, required: true },
    venues: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
    }],
    artists: [{
        id: { type: String, required: true},
        name: { type: String, required: true},
    }],
})

const Profile = mongoose.model('Users', usersSchema);

module.exports = Profile;