'use strict';

// const axios = require('axios');
const UsersModel = require('../models/users');

// async function getVenue(req, res) {
//     const url = process.env.*****;

//     try {
//         const key = 'venue-${req.query.searchQuery}';
//         res.status(200).send(results);
//     }   catch (error) {
//         res.status(500).send(error);
//     }
// }

// async function addVenue(req, res, next) {
//     const url = process.env.****;

//     try {
//         const key ='venue-${req.query.searchQuery}';
//         res.status(201).send(result);
//     }   catch(error) {
//         next(error);
//     }
// }

// async function deleteVenue(req, res, next) {
//     try {
//         const id = req.params.id;
//         const result = await Venue.findByIdAndDelete(id);
//         res.status(204).send(result);
//     }   catch (error) {
//         next(error);
//     }
// }

// class Venue {
//     constructor(obj) {
//         (this.id = obj.id),
//         (this.name = obj.name)
//     }
// }

// const ParsedData = data => {
//     return data.results.map(venue => new Venue(venue));
// };

module.exports = { getVenue, addVenue, deleteVenue };