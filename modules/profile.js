'use strict';

// const axios = require('axios');
const UsersModel = require('../models/users');

async function getProfile(req, res) {
    try {
        const profileFromDb = await Profile.find({ email: req.user.email });
        res.status(200).send(profileFromDb);
    }   catch (error) {
        res.status(500).send('server error');
    }
}

async function addProfile(req, res, next) {
    try {
        const key ='profile-${req.query.searchQuery}';
        res.status(201).send(result);
    }   catch(error) {
        next(error);
    }
}

async function deleteProfile(req, res, next) {
    try {
        const id = req.params.id;
        const result = await Profile.findByIdAndDelete(id);
        res.status(204).send(result);
    }   catch (error) {
        next(error);
    }
}


class Profile {
    constructor(obj) {
        (this.userName = obj.userName),
        (this.password = obj.password),
        (this.password = obj.email),
        (this.venues = obj.venues),
        (this.artists = obj.artists)
    }
}

const ParsedData = data => {
    return data.results.map(profile => new Profile(profile));
};

module.exports = { getProfile, addProfile, deleteProfile };