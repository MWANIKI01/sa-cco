// index.js
const express = require('express');
const router = express.Router();

// Define your routes and handlers for the index page
router.get('/', (req, res) => {
  // Render the index.kabesh view with some data
  res.render('relax.kabesh', {title: 'Kabesh', message: 'Welcome to Kabesh'});
});

// Export the router instance
module.exports = router;
