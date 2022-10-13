'use strict';

// const axios = require('axios');
const Profile = require('../models/users');

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
        const newProfile = await Profile.create({ ...req.body, email: req.user.email })
        res.status(201).send(newProfile);
        
    }   catch(error) {
        res.status(500).send('server error');
        next(error);
    }
}

async function deleteProfile(req, res, next) {
    const { email } = req.params;

    try {
        await Profile.findByandDelete({...req.body, email: req.user.email})
        res.status(204).send(result);
    }   catch (error) {
        next(error);
    }
}

async function addVenue(req, res, next) {
    try {
        const newVenue = await Profile
        res.status(201).send(result);
    }   catch(error) {
        next(error);
    }
}

async function deleteVenue(req, res, next) {
    try {
        const id = req.params.id;
        const result = await Venue.findByIdAndDelete(id);
        res.status(204).send(result);
    }   catch (error) {
        next(error);
    }
}

async function addArtist(req, res, next) {
    try {
        const key ='artist-${req.query.searchQuery}';
        res.status(201).send(result);
    }   catch(error) {
        next(error);
    }
}

async function deleteArtist(req, res, next) {
    try {
        const id = req.params.id;
        const result = await Artist.findByIdAndDelete(id);
        res.status(204).send(result);
    }   catch (error) {
        next(error);
    }
}

class UserProfiles {
    constructor(obj) {
        (this.userName = obj.userName),
        (this.password = obj.password),
        (this.password = obj.email),
        (this.venues = obj.venues),
        (this.artists = obj.artists)
    }
}

class Venue {
    constructor(obj) {
        (this.id = obj.id),
        (this.name = obj.name)
    }
}

class Artist {
    constructor(obj) {
        (this.id = obj.id),
        (this.name = obj.name)
    }
}

const ParsedData = data => {
    return data.results.map(profile => new UserProfiles(profile));
};

module.exports = { getProfile, addProfile, deleteProfile, addVenue, deleteVenue, addArtist, deleteArtist };