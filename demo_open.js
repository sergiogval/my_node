var fs = requiere('fs');

fs.open('mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});