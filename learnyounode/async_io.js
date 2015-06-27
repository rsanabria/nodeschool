/* Leyendo un Archivo de manera Asíncrona */
var fs = require('fs');
var pathToFile, splitArray;

pathToFile = process.argv[2];


fs.readFile(pathToFile, 'utf8', countNewLines);


function countNewLines(err, data) {
  splitArray = data.split("\n");
  console.log(splitArray.length - 1);
    
}

