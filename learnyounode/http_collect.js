var http = require('http'),
    bl   = require('bl'), //https://www.npmjs.com/package/bl
    url  = process.argv[2];

function collectData(err, data) {
  if(err) {
    console.log(err);
  }
  data = data.toString();
  console.log(data.length);
  console.log(data);
}
http.get(url, function getResponse(res) {
  res.setEncoding('utf8');
  res.on('error', console.error);
  res.pipe(bl(collectData));
});