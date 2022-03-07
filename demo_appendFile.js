var fs = require('fs');

fs.appendFile('demoFile1.html', '<h1>We want go ahead together?</h1>', function (err) {
  if (err) throw err;
  console.log('Yeah!');
});