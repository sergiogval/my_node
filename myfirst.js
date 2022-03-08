var http = require('http');
var dt = require('./myfirstmodule');
var data = 'Hello Nodejs File System';


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);

fs.appendFile('mynewfile1.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
data = 'hello world';

fs.writeFile('mynewfile3.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});