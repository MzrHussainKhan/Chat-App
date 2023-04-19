const mongoose = require('mongoose');

const groupSchema = new mongoose.model(
  {
    name: {
      type: String,
      require: true,
    },
    // users: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users',
    //   },
    // ],
    // latestMessage: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Message',
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Groups', groupSchema);
