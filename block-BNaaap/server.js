var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method)
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Welcome to Response Object</h2>');
}

server.listen(4444, 'localhost', () => {
    console.log('server is listening on port 4444');
})