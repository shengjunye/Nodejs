const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

	let url = req.url;

	if (url.endsWith('/web1.html')) {
		fs.readFile('public/web1.html', (err, data) => {
			if (!err) {
				res.writeHead(200, { 'Content-Type':'text/html' });
				res.write(data);
				res.end();
			} else {
				res.writeHead(500, { 'Content-Type':'text/html' });
				res.end();
			}
		})
	} else if (url.endsWith('/web2.html')) {
		fs.readFile('public/web2.html', (err, data) => {
			if (!err) {
				res.writeHead(200, { 'Content-Type':'text/html' });
				res.write(data);
				res.end();
			} else {
				res.writeHead(500, { 'Content-Type':'text/html' });
				res.end();
			}
		})
	} else if (url.endsWith('/web3.html')) {
		fs.readFile('public/web3.html', (err, data) => {
			if (!err) {
				res.writeHead(200, { 'Content-Type':'text/html' });
				res.write(data);
				res.end();
			} else {
				res.writeHead(500, { 'Content-Type':'text/html' });
				res.end();
			}
		})
	} else {
		fs.readFile('public/index.html', (err, data) => {
			if (!err) {
				res.writeHead(200, { 'Content-Type':'text/html' });
				res.write(data);
				res.end();
			} else {
				res.writeHead(500, { 'Content-Type':'text/html' });
				res.end();
			}
		})
	}

});

server.listen(8080);