/**
 * Primary file for the API
 */

// Dependencies

var http = require("http");
var url = require("url");

// The server should respond to all request with a string
var server = http.createServer(function(req, res) {
  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  //Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Send the reponse
  res.end("Hello world");

  // Log the request path
  console.log("request received on path: " + trimmedPath);
});

// start the server
server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
