const mongoose = require('mongoose');

const directMessagesSchema = new mongoose.Schema(
  {
    firstUser: {
      type: String,
      required: true,
    },
    secondUser: {
      type: String,
      required: true,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'Users',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('DM', directMessagesSchema);
