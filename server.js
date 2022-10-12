'use strict';

// requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const axios = require('axios');

const { response } = require('express')

// imported modules
// const getUsers = require('./modules/users.js');
// const getVenue = require('/modules/venue.js');
// const getArtist = require('./modules/artist.js');

// imported Auth module
const verifyUser = require('./auth/authorize.js');

// server starter
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Authorize middleware
app.use(verifyUser);

// Mongoose connect
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', function() {
    console.log('Mongoose is connected to mongo');
})

// port
const PORT = process.env.PORT || 3002;

// coonection listener
app.listen(PORT, () => console.log('Listening on Port ${PORT}'));

// endpoints
// app.get('./venue', getVenue);
// app.get('./artist', getArtist);
// app.get('./profile', getProfile);

// app.post('./venue', addVenue);
// app.post('./artist', addArtist);
// app.post('./profile', addProfile);

// app.delete('./venue/:id', deleteVenue);
// app.delete('./artist/:id', deleteArtist);
// app.delete('./profile/:id', deleteProfile);

app.get('/', (req, res) => {
    res.send('Hello from VenU home route!');
})

// catchall endpoint
app.get('*', (req, res) =>{
    res.status(404).send('Page Not Found!');
})