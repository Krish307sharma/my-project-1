// users.js
const bcrypt = require('bcryptjs');

// Mock database with hashed passwords
const users = [
  {
    id: 1,
    username: 'KRISH SHARMA',
    password: bcrypt.hashSync('KRISH307', 10),
    role: 'admin'
  },
  {
    id: 2,
    username: 'KRISH SHARMA',
    password: bcrypt.hashSync('KRISH307', 10),
    role: 'moderator'
  },
  {
    id: 3,
    username: 'KRISH SHARMA',
    password: bcrypt.hashSync('KRISH307', 10),
    role: 'user'
  }
];

module.exports = users;