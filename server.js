const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

// serving static assets
app.use(express.static(__dirname + '/build'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log("Server started on port " + port));
