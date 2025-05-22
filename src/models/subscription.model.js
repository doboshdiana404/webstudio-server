const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  { email: { type: String, required: true, unique: true, lowercase: true } },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model('Subscription', schema);
