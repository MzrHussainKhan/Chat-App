const express = require('express');
const router = express.Router();

const userRoute = require('./routes/userRoutes');
const idRoute = require('./routes/DMRoutes');

router.use('/user', userRoute);

// router.route('/chats', userRoute);
router.use('/messages', idRoute);
// router.route('/user').post(createUser).get(getUsers);

module.exports.router = router;
