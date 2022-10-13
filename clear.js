'use strict';

require('dotenv').config();
    const { default: mongoose } = require('mongoose');

// Check name
mongoose.connect(process.env.DB_URL);

const Location = require('./modules/profile.js');

async function clear() {
    try {
      await Location.deleteMany({});
      console.log('Profile cleared from DB');
    } catch (err) {
      console.error(err);
    } finally {
      mongoose.disconnect();
    }
  }

// Check name
// const Artists = require('./models/artists');
// const Profile = require('./models/profile');
// const Venues = require('./models/venues');



clear();