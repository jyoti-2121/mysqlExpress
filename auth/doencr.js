const { encrypt, decrypt } = require('./crypto');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("Paste string to encrypt");
rl.on('line', function(line) {
    console.log("You pasted:" + line);
    const hash = encrypt(line);
    console.log("Encrypted String is:" + JSON.stringify(hash, null, 4));
});
