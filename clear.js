'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// Check name
mongoose.connect(process.env.DB_URL);

// Check name
const Artists = require('./models/artists');
const Users = require('./models/artists');
const Venues = require('./models/venues');



clear();