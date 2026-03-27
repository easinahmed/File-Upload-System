const express = require('express');
const server = express();
require('dotenv').config();
const uploadMiddleware = require('./middleware/upload.middleware');
const uploadController = require('./controller/upload.controller');
const frontendRoute = require('./routes/frontend.route');

const PORT = process.env.PORT || 5000;

// Built in middleware to parse JSON bodies
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory
server.use(express.static('uploads'));

// Use frontend routes
server.use(frontendRoute);

server.post("/profile", uploadMiddleware.array('avatar'), uploadController);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
