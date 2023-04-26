const express = require('express');
const router = express.Router();

const userRoute = require('./routes/userRoutes');
const idRoute = require('./routes/DMRoutes');
const messagesRoute = require('./routes/MessagesRoutes');

router.use('/user', userRoute);

// router.route('/chats', userRoute);
router.use('/dm', idRoute);
router.use('/messages', messagesRoute);
// router.route('/user').post(createUser).get(getUsers);

module.exports.router = router;
