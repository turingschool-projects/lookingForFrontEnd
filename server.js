"use strict";

const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port, function() {
  console.log("Server is up and running on port: " + port)
});

module.exports = app;
