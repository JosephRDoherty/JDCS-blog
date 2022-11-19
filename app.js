const http = require('http')

const hostname = 'doherty.software';
const port = 443;

console.log("Hello");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

const fs = require('fs');

const content = 'This worked';

fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});