var urlString = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;

var url = require('url');

let parsedUrl = url.parse(urlString);

// console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);

parseQuery = url.parse(parsedUrl.query);
console.log(`Parsed Query - ${parseQuery}`)
