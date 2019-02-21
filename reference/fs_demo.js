const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/example'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write fo File
// fs.writeFile(path.join(__dirname, '/example', 'hello.txt'), 'Hello World!',
// err => {
//   if (err) throw err;
//   console.log('File written to...');
//   fs.appendFile(path.join(__dirname, '/example', 'hello.txt'), 'I love Node.js',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');
//   });
// });


// // Read file
// fs.readFile(path.join(__dirname, '/example', 'hello.txt'), 'utf8', (err,data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // Rename file
// fs.rename(path.join(__dirname, '/example', 'hello.txt'), path.join(__dirname, '/example', 'helloworld.txt'), (err) => {
//   if (err) throw err;
//   console.log('File renamed...');
// });
//
// // Rename file
// fs.rename(path.join(__dirname, '/example', 'helloworld.txt'), path.join(__dirname, '/example', 'hello.txt'), (err) => {
//   if (err) throw err;
//   console.log('File renamed...');
// });
