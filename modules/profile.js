'use strict';

// const axios = require('axios');
const UsersModel = require('../models/users');

// async function getProfile(req, res) {
//     const url = process.env.****;

//     try {
//         const key = 'profile-${req.query.searchQuery}';
//         res.status(200).send(results);
//     }   catch (error) {
//         res.status(500).send(error);
//     }
// }

// async function addProfile(req, res, next) {
//     const url = process.env.****;

//     try {
//         const key ='profile-${req.query.searchQuery}';
//         res.status(201).send(result);
//     }   catch(error) {
//         next(error);
//     }
// }

// async function deleteProfile(req, res, next) {
//     try {
//         const id = req.params.id;
//         const result = await Profile.findByIdAndDelete(id);
//         res.status(204).send(result);
//     }   catch (error) {
//         next(error);
//     }
// }


// class Profile {
//     constructor(obj) {
//         (this.userName = obj.userName),
//         (this.password = obj.password),
//         (this.venues = obj.venues),
//         (this.artists = obj.artists)
//     }
// }

// const ParsedData = data => {
//     return data.results.map(profile => new Profile(profile));
// };

module.exports = { getProfile, addProfile, deleteProfile };