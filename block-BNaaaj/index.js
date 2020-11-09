console.log('Welcome to Nodejs');

let os = require('os');
let fs = require('fs');
let {readFile, unlink} = require('fs')

os.cpus();
os.freemem();
os.version();
os.uptime();


// Buffer

var buff1 = Buffer.alloc(12);
buff1.write('Wlecome to Node Js');
buff1.toString();
console.log(buff1);

var buff2 = Buffer.allocUnsafe(12);

// Blocking

console.log("execute me first");
console.time('task1');

for (let i = 0; i < 1000; i++) {
   
}

console.timeEnd('task1');

console.log('execute me last');

//  Non-Blocking

console.log("execute me first");

console.time('task1');
setTimeout(() => {
    console.log("timeout executed");
    console.timeEnd('task1')
}, 1000);
console.log('execute me last');