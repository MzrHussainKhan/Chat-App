const db = require('../db/config');

const DmServices = require('../services/DMservices');

const DMcontrollers = {
  postApi: async (req, res) => {
    try {
      const postdata = await DmServices.create(req, res);

      return postdata;
    } catch (err) {
      console.log(err);
    }
  },
  getApi: async (req, res) => {
    try {
      const getdata = await DmServices.getAllChat(req, res);
      return getdata;
    } catch (err) {
      console.log(err);
    }
  },

  getSinglechat: async (req, res) => {
    try {
      const singlechat = await DmServices.getSingleChat(req, res);
      return singlechat;
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = DMcontrollers;
