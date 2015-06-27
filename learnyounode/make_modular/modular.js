var filter = require('./filter');
var pathToDir, extension;

/*pathToDir = process.argv[2];
extension = "." +process.argv[3];*/

function filteredFiles(err,list) {
    //console.log(list);
    if(err)
        return err;
    //console.log(list);
    list.forEach( function (file) {
        console.log(file);
    })
}

filter(process.argv[2], process.argv[3], filteredFiles);

