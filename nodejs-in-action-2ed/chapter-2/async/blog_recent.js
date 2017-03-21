const http = require('http');
const fs = require('fs');

const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer((req, res) => {
	
	if (req.url == '/') {
		fs.readFile('./titles.json', (err, data) => {
 			
 			if (err) {
 				console.error(err);
 				res.end('Server Error');
 			} else {
 				const titles = JSON.parse(data.toString());
 				fs.readFile('./template.html', (err, data) => {
 					if (err) {
 						console.error(err);
 						res.end('Server Error');
 					} else {
 						const tmpl = data.toString();
 						const html = tmpl.replace('%', titles.join('</li><li>'));
 						res.writeHead(200,  { 'Content-Type': 'text/html'} );
 						res.end(html);
 					}
 				});
 			}

		});
	} else {
		console.log("Request not expected: %s", req.url);
	}

})

server.listen(port, host);

server.on('request', (request) => {
	console.log('Received request: %s', request);
});