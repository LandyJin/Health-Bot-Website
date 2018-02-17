// Require the express web application framework (https://expressjs.com)
var express = require('express');

// Create a new web application by calling the express function
var app = express();

var bodyParser = require("body-parser");

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(8080, function () {
  // When the application starts, print to the console that our app is
  // running at http://localhost:8080. Print another message indicating
  // how to shut the server down.
  console.log("Web server running at: http://localhost:8080")
  console.log("Type Ctrl+C to shut down the web server")
});
