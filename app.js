const express = require('express');
const server = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
server.use(express.json());