var http = require('http'),
    bl   = require('bl'),//https://www.npmjs.com/package/bl
    urlOne  = process.argv[2];
    urlTwo  = process.argv[3];
    urlThree  = process.argv[4];

function collectData(err, data) {
  if(err) {
    console.log(err);
  }
  data = data.toString();
  console.log(data);
}

function getThree() {
  http.get(urlThree, function getResponse(res) {
    res.setEncoding('utf8');
    res.on('error', console.error);
    res.pipe(bl(collectData));
  });

}

function getTwo(callback) {
  http.get(urlTwo, function getResponse(res) {
    res.setEncoding('utf8');
    res.on('error', console.error);
    res.pipe(bl(collectData));
    callback();
  });
  
}
function getOne(callback,callback2) {
  http.get(urlOne, function getResponse(res) {
    res.setEncoding('utf8');
    res.on('error', console.error);
    res.pipe(bl(collectData));
    callback(callback2);
  });
  
}

getOne(getTwo,getThree);