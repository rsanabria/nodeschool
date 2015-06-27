var net = require('net'),
    strftime = require('strftime'), //https://github.com/samsonjs/strftime
    port = process.argv[2],
    server;

server = net.createServer( function (socket) {
  socket.write(strftime('%Y-%m-%d %H:%M\n')); //YYYY-MM-DD hh:mm
  socket.end();
});

server.listen(port);