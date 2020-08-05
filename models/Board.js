const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  name: {
    maxlength: [50, 'Name max length is 50 characters'],
    required: [true, 'Please add a name'],
    trim: true,
    type: String,
    unique: true,
  },
  description: {
    maxlength: [200, 'Description max length is 200 character'],
    type: String,
  },
  createdAt: {
    default: Date.now,
    type: Date,
  }
});

module.exports = mongoose.model('Board', BoardSchema);