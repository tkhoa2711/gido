'use strict';

module.exports = {
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/gido',
    options: {
      user: '',
      pass: ''
    }
  }
};
