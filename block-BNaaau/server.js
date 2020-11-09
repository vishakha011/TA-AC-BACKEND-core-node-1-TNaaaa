var http = require('http');
var fs = require('fs');
var url = require('url');


var server1 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req, res)
}

server1.listen(5000, 'localhost', () => {
    console.log('server is listening to port 5000');
});

// Q.2

var server2 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end('My first server in NodeJS');
}

server2.listen(5100, 'localhost', () => {
    console.log('server is listening to port 5100');
});

// Q.3

var server3 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    res.end(req.headers['user-agent']);
}

server3.listen(5555, 'localhost', () => {
    console.log('server is listening to port 5555');
});

// Q.4

var server4 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.url, req.method);
    res.end(req.url, req.method);
}

server4.listen(5566, 'localhost', () => {
    console.log('server is listening to port 5566');
});

// Q.5

var server5 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end(JSON.stringify(req.headers));
}

server5.listen(7000, 'localhost', () => {
    console.log('server is listening to port 7000');
});

// Q.6

var server6 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = 202;
    res.end();
}

server6.listen(3333, 'localhost', () => {
    console.log('server is listening to port 3333');
});

// Q.7

var server7 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader("Content-Type", "text/html")
    res.end('<h3>Welcome to altcampus</h3>');
}

server7.listen(8000, 'localhost', () => {
    console.log('server is listening to port 8000');
});

// Q.8

var server8 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(202, {"Content-Type" : "text/html"})
    res.end('<h3>Welcome to altcampus</h3>');
}

server8.listen(8800, 'localhost', () => {
    console.log('server is listening to port 8800');
});

// Q.9

var server9 = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader("Content-Type", "aplication/json")
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}

server9.listen(8888, 'localhost', () => {
    console.log('server is listening to port 8888');
});

// Q.10

var server10 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method)
    if(req.method === "POST" && req.url === "/") {
        res.setHeader("Content-Type", "text/html")
        res.end('<h2>posted for first time</h2>');
    }
}

server10.listen(5050, 'localhost', () => {
    console.log('server is listening to port 5050');
});


// Q.11

var server11 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method)
    if(req.method === "GET" && req.url === "/") {
        res.setHeader("Content-Type", "text/plain")
        res.end('Vishakha');
    }
    else if(req.method === "GET" && req.url === "/about") {
        res.setHeader("Content-Type", "text/html")
        res.end('<h2>Vishakha</h2>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2>Page Not Found</h2>')
    }
}

server11.listen(2345, 'localhost', () => {
    console.log('server is listening to port 2345');
});


// Q.12

var server12 = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method)
    if(req.method === "GET" && req.url === "/users") {
        res.setHeader("Content-Type", "text/html")
        fs.createReadStream('./index.html').pipe(res)
    }
    else if(req.method === "POST" && req.url === "/users") {
        res.setHeader("Content-Type", "text/html")
        res.end('Posted for the second time');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h2>Page Not Found</h2>')
    }
}

server12.listen(2000, 'localhost', () => {
    console.log('server is listening to port 2000');
});


// Q.13

var server13 = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url);
    console.log(req.url)
    console.log(parsedUrl.pathname)
    var pathname = parsedUrl.pathname
    // res.end('Welcome');
    res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(parsedUrl.query));
 
}

server13.listen(4455, 'localhost', () => {
    console.log('server is listening to port 4455');
});