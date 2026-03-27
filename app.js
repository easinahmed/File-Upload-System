const express = require('express');
const server = express();
require('dotenv').config();
const upload = require('./middleware/upload.middleware');
const uploadController = require('./controller/upload.controller');

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
server.use(express.json());

// server.use(upload)

server.post("/profile", upload.array('avatar'), uploadController);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
