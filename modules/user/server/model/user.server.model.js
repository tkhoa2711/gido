'use strict';

var mongoose = require('mongoose'),
  crypto = require('crypto'),
  Schema = mongoose.Schema;

/**
 * The schema of user model
 */
var UserSchema = new Schema({
  username: {
    type: String,
    unique: 'Username already exists',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    default: '',
    trim: true
  },
  password: String,
  salt: String
});

/**
 * Pre-saving hook that will create a salt and hash the password
 */
UserSchema.pre('save', function (next) {
  if (this.password && this.isModified('password')) {
    this.salt = crypto.randomBytes(64).toString('base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

/**
 * Method for hashing a password
 */
UserSchema.methods.hashPassword = function (password) {
  if (this.salt && password) {
    return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 1000, 64, 'sha512').toString('base64');
  } else {
    return password;
  }
};

/**
 * Helper method for authenticating user (using password)
 */
UserSchema.methods.authenticate = function (password) {
  this.password = this.hashPassword(password);
};

mongoose.model('User', UserSchema);
