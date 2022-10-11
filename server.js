'use strict';

// requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const axios = require('axios');

const { response } = require('express')

// imported modules
// const getVenue = require('/modules/venue.js');
// const getArtist = require('./modules/artist.js');
// const getUsers = require('./modules/users.js');

// server starter
const app = express();

// middleware
app.use(cors());
app.use(express.json());

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

app.get('/', (req, res) => {
    res.send('Hello from VenU home route!');
})

// catchall endpoint
app.get('*', (req, res) =>{
    res.status(404).send('Page Not Found!');
})