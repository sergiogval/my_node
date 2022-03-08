var fs = require('fs') 
var data = 'Hello Nodejs File System'

fs.appendFile('mynewfile1.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});