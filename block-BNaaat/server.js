var http = require('http');
var url = require('url')
var fs = require('fs');


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;
    console.log(pathname);
    if(req.method === "GET" && pathname === "/file") {
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('./node.html', (err, content) => {
            if(err) {
                console.log(err)
            }
            res.end(content)
        })
    }
    else if(req.method === "GET" && pathname === "/stream") {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./node.html').pipe(res)
    }
  
}

server.listen(5000, 'localhost', () => {
    console.log('server listening on port 5000');
})