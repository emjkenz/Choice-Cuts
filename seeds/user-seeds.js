const {User} = require('../models');
const crypto = require('crypto');

const userData = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'example@example.com',
        password: 'password123',
        avatar: crypto.randomUUID(),
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;