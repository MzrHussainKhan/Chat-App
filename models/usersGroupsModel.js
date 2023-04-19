const mongoose = require('mongoose');

const usersGroupsSchema = new mongoose.Schema(
  {
    // sender: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Users',
    // // },
    // content: {
    //   type: String,
    // },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    groupid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Groups',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('usersGroups', usersGroupsSchema);
