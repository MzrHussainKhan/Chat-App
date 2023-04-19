const express = require('express');
const router = express.Router();
const { protected } = require('../middleware/authMiddleware');

router.use(protected);
const DMcontrollers = require('../controllers/dmControllers');

router.post('/', async (req, res) => {
  try {
    const dmUsers = await DMcontrollers.postApi(req, res);
    res.send(dmUsers);
    // return dmUsers;
  } catch (err) {
    console.error(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const getAllChats = await DMcontrollers.getApi(req, res);
    res.send(getAllChats);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singlechat = await DMcontrollers.getSinglechat(req, res);
    res.send(singlechat);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
