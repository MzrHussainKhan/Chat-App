const DM = require('../models/DMmodel');
const Users = require('../models/userModel');
const Messages = require('../models/MessagesModel');
const protected = require('../middleware/authMiddleware');

const DmServices = {
  create: async (req, res) => {
    try {
      const firstUser = await req.Users.id;
      //   console.log(firstUser);
      const secondUser = req.body.secondUser;
      //   const two = secondUser.secondUser;
      //   console.log(two);
      const data = await DM.create({
        firstUser,
        secondUser,
      });

      if (data) {
        const id = data.id;
        // console.log(id);
        const newMessage = await Messages.create({
          content: req.body.content,
          DMId: id,
          sender: firstUser,
        });
        console.log(newMessage);
        // const sender = await Messages.create({}).populate('sender');
        // console.log(sender);
      }

      return data;
    } catch (err) {
      console.log(err);
    }
  },

  getAllChat: async (req, res) => {
    try {
      const getchat = await DM.find();
      return getchat;
    } catch (err) {
      console.log(err);
    }
  },

  getSingleChat: async (req, res) => {
    try {
      const secondUser = req.params.secondUser;
      const singlechat = await DM.findOne(secondUser);
      return singlechat;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = DmServices;
