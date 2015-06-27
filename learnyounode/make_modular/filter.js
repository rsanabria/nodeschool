/* Leyendo un Directorio y filtrando los arvhivos */
var fs = require('fs');
var path = require('path');

function filter(pathToDir, extension, callback) {
  fs.readdir(pathToDir, function (err, list) {
    if (err)
      return callback (err, []);
    filtered = [];
    list.forEach( function (file) {
      if(path.extname(file) === "."+ extension) {
        filtered.push(file);
      }
    });
  callback(null, filtered);
  });
    
}

module.exports = filter;