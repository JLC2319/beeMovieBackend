// Packages
const express = require('express');
const fs = require('fs');
// Startup Variables
const app = express();
const port = 3030;
const beeMovieScript = require('./resources/the-full-bee-movie-script');
// routes
app.get('/test', (req, res) => {
  res.send('Hello World');
});
app.get('/beemoviescript', (req, res) => {
  res.send(beeMovieScript);
});
// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

})
