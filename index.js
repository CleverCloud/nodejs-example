import http from 'http';

const port = process.env.NODE_PORT || 8080;
const server = http.createServer((req, res) => {
  console.log(`REQUEST ${req.method} ${req.url}`);
  return res.end(`Hello World!!!`);
});
server.listen(port);
console.log(`HTTP server running at port ${port}`);
