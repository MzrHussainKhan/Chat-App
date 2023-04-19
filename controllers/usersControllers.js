const db = require('../db/config');

const userService = require('../services/usersServices');

const controllers = {
  createUser: async (req, res) => {
    try {
      // const payload = req.body;
      let user = await userService.createNewuser(req, res);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  userAuth: async (req, res) => {
    try {
      let auth = await userService.userAuthentication(req, res);
      return auth;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getUsers: async (req, res) => {
    try {
      // const payload = req.body;
      let user = await userService.getAllusers(req, res);
      // console.log(req.Users._id);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      let gsingleUser = await userService.singleuser(req, res);
      return gsingleUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      let user = await userService.updateUser(req, res);
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      let deleted = await userService.deleteuser(req, res);
      return deleted;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = controllers;
