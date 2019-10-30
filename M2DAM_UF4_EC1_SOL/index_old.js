const http = require('http');
const os = require('os');
const conversions = require('./moduls/conversions');
const notifier = require('node-notifier');

notifier.notify({
		title: 'Notificació',
		message: 'Aquest és el missatge de notificació!!',
		sound: true
	});

const server = http.createServer((req, res) => {
	let sistema = os.platform();
	let arquitectura = os.arch();
	let memoria = os.totalmem();
	let memoriaGB = conversions.bytesToGB(memoria);
	let memoriaMB = conversions.bytesToMB(memoria);

	res.writeHead(200, { 'Content-Type':'text/html' });
	res.write(`<!doctype html>
				<html>
					<head>
						<meta charset="utf-8">
						<title>NodeJS</title>
					</head>

					<body>
						<h1>Rubén Martínez Castilla</h1>
						<ul>
							<li>SISTEMA: ${sistema}</li>
							<li>ARQUITECTURA: ${arquitectura}</li>
							<li>MEMÒRIA: ${memoriaGB} GB (${memoriaMB} MB)</li>
						</ul>
					</body>
				</html>`);
	res.end();

});

server.listen(8080);