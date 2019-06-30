const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: 'string',
    default: 'ABC'
  },
  dob: 'string',
  mobile: {
    type: 'string',
    required: true,
  }
});

const model = mongoose.model('User', UserSchema);
module.exports = model;