/* Leyendo un Directorio y filtrando los arvhivos */
var fs = require('fs');
var path = require('path');
var pathToDir, extension;

pathToDir = process.argv[2];
extension = "." +process.argv[3];

fs.readdir(pathToDir, filterFiles);


function filterFiles(err, list) {
  list.forEach( function (file) {
    if(path.extname(file) === extension) {
      console.log(file);
    }  
  });
    //console.log(list);
}