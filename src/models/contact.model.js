const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    comment: { type: String },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model('Contact', contactSchema);
