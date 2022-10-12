'use strict';

// const axios = require('axios');
const UsersModel = require('../models/users');

async function getArtist(req, res) {
    try {
        const profileFromDb = await Profile.find({ email: req.user.email });
        res.status(200).send(results);
    }   catch (error) {
        res.status(500).send(error);
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

class Artist {
    constructor(obj) {
        (this.id = obj.id),
        (this.name = obj.name)
    }
}

const ParsedData = data => {
    return data.results.map(artist => new Artist(artist));
};

module.exports = { getArtist, addArtist, deleteArtist };