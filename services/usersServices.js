// const asyncHandler = require('express-async-handler');

const Users = require('../models/userModel');
const generateToken = require('../db/generateToken');

const services = {
  createNewuser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields');
      }
      if (await Users.findOne({ email })) {
        res.status(400);
        throw new Error('Email already exists');
      }

      const user = await Users.create({
        name,
        email,
        password,
      });
      if (user) {
        res.send({
          _id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          Token: generateToken(user._id),
        });
        return user;
      }
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },

  userAuthentication: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await Users.findOne({ email });

      if (userExist && userExist.matchPassword(password)) {
        res.send({
          _id: userExist.id,
          name: userExist.name,
          email: userExist.email,
          // password: userExist.password,
          Token: generateToken(userExist._id),
        });
      }
      if (!userExist) {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllusers: async (req, res) => {
    try {
      const users = await Users.find();
      res.send(users);
      return users;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },
  singleuser: async (req, res) => {
    try {
      console.log('Hey');
      const singleUser = await Users.findById(req.params.id);
      return singleUser;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },
  updateUser: async (req, res) => {
    try {
      let updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return updateUser;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },

  deleteuser: async (req, res) => {
    try {
      let deleteSingleuser = await Users.findByIdAndDelete(req.params.id);
      return deleteSingleuser;
    } catch (err) {
      res.status(400);
      throw new Error(err);
    }
  },
};
module.exports = services;
