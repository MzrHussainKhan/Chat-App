const mongoose = require('mongoose');

const messagesSchemas = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    DMId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DM',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Messages', messagesSchemas);
