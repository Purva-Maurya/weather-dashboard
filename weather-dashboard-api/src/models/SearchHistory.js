const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    default: '',
  },
  temperature: {
    type: Number,
  },
  description: {
    type: String,
    default: '',
  },
  searchedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
