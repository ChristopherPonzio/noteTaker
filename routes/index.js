const express = require('express');


// Import our modular routers for /tips and /feedback
const apiRoutes = require('./apiRoutes');


const app = express();

app.use('/notes', apiRoutes);
//app.use('/', htmlRoutes);


module.exports = app;