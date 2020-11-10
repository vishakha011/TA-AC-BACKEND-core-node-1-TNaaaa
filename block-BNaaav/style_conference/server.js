var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(handleRequest)

function handleRequest(req, res) {
    // console.log(req.url);
    var extensionName = req.url.split('.').pop();
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if(req.method === "GET" && pathname === "/") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(req.method === "GET" && pathname === "/register") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./register.html').pipe(res);
    }
    else if(req.method === "GET" && pathname === "/schedule") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./schedule.html').pipe(res);
    }
    else if(req.method === "GET" && pathname === "/speakers") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./speakers.html').pipe(res);
    }
    else if(req.method === "GET" && pathname === "/venue") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./venue.html').pipe(res);
    }
    else if(req.url.includes('.css')) {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('.' + req.url).pipe(res);
    }
    else if(['jpg', 'png', 'svg'].includes(extensionName)) {
        fs.createReadStream('.' + req.url).pipe(res)
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2>Page Not Found</h2>')
    }
}

server.listen(3000, 'localhost',  () => {
    console.log('server is listening on port 3000');
})