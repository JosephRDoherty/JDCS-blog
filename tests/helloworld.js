var http = require('http');
var url = require('url');
var dt = require('./datetime.js');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The server has responded");
//   res.write("<br><h1>HTML Tag Test</h1><br>");
//   res.write("<p>You entered the following into the URL:</p> <br>");
//   res.write("<h3>" + req.url + "</h3>");
//   res.write("<br><h6>The date and time are currently: " + dt.myDateTime());
//   res.end("</h6><br><code>End of server response</code>");
// }).listen(8080);

// Appends to existing file or creates a new file
// fs.appendFile('test.txt', 'CREATED CONTENT', function(err) {
//   if (err) throw err;
//   console.log("Saved Content to file");
// });

// opens the file or creates it, but does not add any content to it
// w means the file is ready to be Written to
// fs.open('test.txt', 'w', function(err, file) {
//   if(err) throw err;
//   console.log("SAVED TO TEST.TXT USING OPEN");
// })

// Writes to the file, and overwrites the original file if it existed
// fs.writeFile('test.txt', 'CONTENT BABY!', function(err) {
//   if(err) throw err;
//   console.log("Overwrote test.txt");
// })


