var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2],
    server;

server = http.createServer(function reqHandler(req, res) {
  if(req.method !== 'POST') {
    return res.end('Send me a POST\n');
  }
  res.writeHead(200, {'content-type' : 'text/plain'}); 
  req.pipe(map( function uperCase(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);