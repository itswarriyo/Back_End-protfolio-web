const mongoose = require("mongoose");

const enquerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true,
    trim: true
  },

  subject: {
    type: String,
    required: true,
    trim: true
  },

  country: {
    type: String,
    required: true,
    trim: true
  },

  services: {
    type: String,
    required: true,
    trim: true
  },
    message: {
    type: String,
    required: true,
    trim: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("PortfolioResponse", enquerySchema);