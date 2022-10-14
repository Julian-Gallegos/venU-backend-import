'use strict';

const { default: mongoose } = require('mongoose');

require('dotenv').config();

// Check the name of your environment variable:
mongoose.connect(process.env.DB_URL);

// Check the name of your module:

const Profile = require('./models/users');
const { addProfile } = require('./modules/profile');

async function seed() {

    await Profile.create({
        email: 'chrisbhollis@gmail.com',
        venues: [{
            id: 'jdfkja;l',
            name: 'jhdafj'
        },
        {
            id: 'kldsj;lija',
            name: ';ljafi;;savm',
        }

        ],
        artist: [{
            id: 'kdj;lakjl',
            name: 'jkdklal;'
        }]
    });
    mongoose.disconnect();
}


seed();