let fs = require('fs');
let data = fs.readFileSync('abc.txt');
console.log(data.toString());
let wdata="How are you doing?"
fs.appendFileSync("abc.txt",wdata);
let datad = fs.readFileSync('abc.txt');
console.log(datad.toString());