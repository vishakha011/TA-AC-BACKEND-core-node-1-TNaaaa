let fs = require('fs');

// Sync
let data = fs.readFileSync('./content.md');
console.log(`synchronous data - ${data.toString()}`);

// Async
setTimeout(() => {
    fs.readFile('./content.md', (error, content) => {
        console.log(error, `synchronous data - ${content.toString()}`)
    })
}, 1000);

// Buffer
var buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");

console.log(buff1.toString());

