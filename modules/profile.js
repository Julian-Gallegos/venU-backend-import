'use strict';

const { request } = require('express');
// const axios = require('axios');
const Profile = require('../models/users');

async function getProfile(req, res) {
    try {
        const profileFromDb = await Profile.findOneAndUpdate(
            { email: req.user.email },
            { $setOnInsert: {venues: [], artists: []}},
            { upsert: true, new: true }            
            );
        res.status(200).send(profileFromDb);

    }   catch (error) {
        res.status(500).send('server error');
    }
}

async function addProfile(req, res, next) {
    console.log('req.body is', req.body)
    try {
        const newProfile = await Profile.create({...req.body, email: req.user.email })
        res.status(201).send(newProfile);
        
    }   catch(error) {
        res.status(500).send('server error');
        next(error);
    }
}

async function deleteProfile(req, res, next) {
    const id = req.params.id;

    try {
        await Profile.findByIdAndDelete(id);
        res.status(204).send('Successfully deleted profile');
    }   catch (error) {
        next(error);
    }
}

async function addVenue(req, res, next) {
    try {
        const fetchedProfile = await Profile.findOne({ email: req.user.email });
        fetchedProfile.venues.push({id: req.params.id})
        fetchedProfile.save();
        res.status(201).send("Successfully saved venue");
    }   catch(error) {
        next(error);
    }
}

async function deleteVenue(req, res, next) {
    try {
        const fetchedProfile = await Profile.findOne({ email: req.user.email });
        const index = fetchedProfile.venues.findIndex(obj => obj.id === req.params.id);
        fetchedProfile.venues.splice(index, 1);
        fetchedProfile.save();
        res.status(204).send("Successfully deleted venue");
    }   catch (error) {
        next(error);
    }
}

async function addArtist(req, res, next) {
    try {
        const fetchedProfile = await Profile.findOne({ email: req.user.email });
        fetchedProfile.artists.push(req.params.id)
        fetchedProfile.save();
        res.status(201).send("Successfully saved artist");
    }   catch(error) {
        next(error);
    }
}

async function deleteArtist(req, res, next) {
    try {
        const fetchedProfile = await Profile.findOne({ email: req.user.email });
        const index = fetchedProfile.artists.findIndex(obj => obj.id === req.params.id);
        fetchedProfile.artists.splice(index, 1);
        fetchedProfile.save();
        res.status(204).send("Successfully deleted artist");
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

// class Venue {
//     constructor(obj) {
//         (this.id = obj.id)
//     }
// }

// class Artist {
//     constructor(obj) {
//         (this.id = obj.id)
//     }
// }

const ParsedData = data => {
    return data.results.map(profile => new UserProfiles(profile));
};

module.exports = { getProfile, addProfile, deleteProfile, addVenue, deleteVenue, addArtist, deleteArtist };