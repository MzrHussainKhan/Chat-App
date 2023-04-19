const express = require('express');
const env = require('dotenv').config();

const { router } = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

// app.use('/chat', require('./routes/userRoutes'));

app.listen(2023, () => {
  console.log(`Server running on Port : ${2023}`);
});
