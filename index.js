import http from 'http';

const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => res.end(`Hello World!!!`));
server.listen(port);
console.log(`HTTP server running at port ${port}`);
