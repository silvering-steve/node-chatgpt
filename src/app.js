// Config file
require('dotenv').config();

// Import modules
const express = require('express')
const bodyParser = require('body-parser');

const app = express();

// Import routers
const v1Router = require('./routes/v1');

// Middleware apps
app.use(express.json());

// Environment variables
const port = process.env.PORT;
const host = process.env.HOST;

// Routers
app.use('/v1', v1Router);

// Run server
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});