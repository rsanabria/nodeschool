/* Leyendo un Archivo de manera Síncrona */
var fs = require('fs');
var pathToFile, buffer, splitArray;

pathToFile = process.argv[2];

buffer = fs.readFileSync(pathToFile);

splitArray = buffer.toString().split("\n");
//Muestra el numero de nuevas lineas
console.log(splitArray.length-1);