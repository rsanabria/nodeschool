var http = require('http'),
    url  = require('url'),
    port = process.argv[2],
    reqUrl, date,time, server;

server = http.createServer(function reqHandler(req, res) {
  reqUrl = url.parse(req.url, true);
  
  if(reqUrl.pathname === "/api/parsetime") {
    res.writeHead(200, {'content-type' : 'application/json'});
    date = new Date(reqUrl.query.iso);
    time = {"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()};
    res.write(JSON.stringify(time), 'utf-8');
    res.end();
  }
  
  if(reqUrl.pathname === "/api/unixtime") {
    res.writeHead(200, {'content-type' : 'application/json'});
    date = new Date(reqUrl.query.iso);
    res.write(JSON.stringify({"unixtime" : date.getTime()}), 'utf-8');
    res.end();
  }

  /*res.writeHead(200, {'content-type' : 'text/plain'});*/
  
  
  
  
});

server.listen(port);