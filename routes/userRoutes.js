const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersControllers');
const { protected } = require('../middleware/authMiddleware');

// router.get('/', controller.getUsers);
// router.post('/', controller.createUser);

// router.use(protected);

router.post('/createuser', async (req, res) => {
  try {
    let user = await controller.createUser(req, res);
    return user;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const auth = await controller.userAuth(req, res);
    return auth;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.use(protected);

router.get('/getallusers', async (req, res) => {
  try {
    let user = await controller.getUsers(req, res);
    return user;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/single/:id', async (req, res) => {
  try {
    let singleUser = await controller.getSingleUser(req, res);
    res.send(singleUser);
    return singleUser;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    let updateUser = await controller.updateUser(req, res);
    res.send(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    let deleteUser = await controller.deleteUser(req, res);
    res.send(deleteUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// router.route('/user').post(createUser).get(getUsers);

module.exports = router;
