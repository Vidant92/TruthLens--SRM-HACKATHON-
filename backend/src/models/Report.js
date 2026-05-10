const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  modality: {
    type: String,
    enum: ['text', 'url', 'image'],
    required: true,
  },
  truthScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  verdict: {
    type: String,
    enum: ['Real', 'Fake', 'Misleading', 'Unverified'],
    required: true,
  },
  analysisDetails: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Report', reportSchema);
