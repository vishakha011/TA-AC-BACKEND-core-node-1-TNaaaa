var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end('Welcome to Response Object');
}

server.listen(4444, 'localhost', () => {
    console.log('server is listening on port 4444');
})