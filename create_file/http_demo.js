var  http = require('http');
var fs = require('fs');
var data = 'Hello Nodejs File System';
  
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

fs.appendFile('mynewfile1.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

