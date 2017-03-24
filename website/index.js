const http = require('http');
const request = require('request');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  request('http://products-service:4567', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 

    JSON.parse(body).products.forEach(function(p) {
        res.write("product: " + p + "\n");
    });
    res.end()
  });
  
});

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});