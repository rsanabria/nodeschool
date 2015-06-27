var http = require('http'),
    fs   = require('fs'),
    port = process.argv[2],
    file = process.argv[3],
    src, server;

server = http.createServer(function reqHandler(req, res) {
  src = fs.createReadStream(file);
  res.writeHead(200, {'content-type' : 'text/plain'});
  src.pipe(res);  //info about  streams : https://github.com/substack/stream-handbook
  
  
  
});

server.listen(port);