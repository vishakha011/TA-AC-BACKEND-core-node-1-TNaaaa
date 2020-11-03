let urlString = 'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male';

let url = require('url');

let parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
console.log(`Pathname - ${parsedUrl.pathname}`);
console.log(parsedUrl.query);
console.log(`Host - ${parsedUrl.host}`);
console.log(`Protocol - ${parsedUrl.protocol}`)