const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  priority: {type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium'},
  category: {type: String, default: 'General'},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ticket', ticketSchema);