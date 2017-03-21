const http = require('http');
const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer((req, res) => {
	res.end('Hello World');
});

server.listen(port, host, 0, () => {
	console.log('Server listening on http://%s/%s', host, port);
});