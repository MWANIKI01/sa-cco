// server.js
const express = require('express');
const app = express();
const kabesh = require('./kabesh'); // make sure this module exists
app.use(express.static('./public'));
const router = require('./resources/router/index.js'); // Import the router module
app.use(router); // Use the router as a middleware


const port = 1000;

// index page
app.get('/', router); // use router as a middleware function


app.listen(port, () => {
    console.log("App initialized successfully and is running on port: " + port);
    // console.log(localhost);
  });
  kabesh(app); // make sure this function does what you expect
