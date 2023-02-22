// Packages
const express = require('express');
const fs = require('fs');

// Startup Variables
const app = express();
const port = 3030;
const beeMovieScript = require('./resources/the-full-bee-movie-script');

// http://localhost:3030/

// routes
app.get('/test', (req, res) => {
  res.send('According to all known laws of aviation, there is no way that a bee should be able to fly...');
});
app.get('/beemoviescript', (req, res) => {
  if (req.params.yell === true){
    res.send(beeMovieScript.toUpperCase());
  }
  
  if (req.params.whisper === true){
    res.send(beeMovieScript.toLowerCase());
  }

  res.send(beeMovieScript);
});

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

})
