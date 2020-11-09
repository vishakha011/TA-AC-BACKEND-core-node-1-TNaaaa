var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    if(req.method === "GET" && pathname === "/") {
        res.setHeader('Content-Type', 'text/plain')
        res.write("Welcome to homepage");
    }
    else if(req.method === "GET" && pathname === "/about") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h2>this is all about NodeJS</h2>')
    }
    else if(req.method === "POST" && pathname === "/about") {
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify('{message: this is a post request}'))
    }
    res.end();
}

server.listen(5000, "localhost", () => {
    console.log('server is listening on port 5000');
})