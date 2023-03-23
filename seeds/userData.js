const bcrypt = require('bcrypt');
const { User } = require('../models');

const userData = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    password: bcrypt.hashSync('password456', 10),
  },
  {
    name: 'Bob Smith',
    email: 'bobsmith@example.com',
    password: bcrypt.hashSync('password789', 10),
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
  console.log('Users seeded successfully');
};

seedUsers();

module.exports = seedUsers;
