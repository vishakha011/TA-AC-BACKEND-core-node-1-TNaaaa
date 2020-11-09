let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    console.log(req.url, req.method);
    res.end("Welcome");
}
 
server.listen(4000, () => {
    console.log("server listening on port 4000")
});

// var http = require('http');

// let server = http.createServer(handleResquest);

// function handleResquest(req, res) {
//     console.log(req.method, req.url, req.headers);
//     res.end('Welcome')
// }

// server.listen(3000, 'localhost', () => {
//     console.log("server listening on port 3000")
// })

