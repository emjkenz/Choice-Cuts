const {User} = require('../models');

const userData = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'example@example.com',
        password: 'password123'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;