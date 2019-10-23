const http = require('http');
//const os = require('os');
//const conversions = require('./moduls/conversions');
const notifier = require('node-notifier');

//Crida i resposta en el servidor
const fs = require('fs');
notifier.notify({
	title: 'Notificacio',
	message: 'Aquest és el missatge de notificació',
	sound: true
})
/*
const server = http.createServer((req, res) => {
	let sistema = os.platform();
	let arquitectura = os.arch();
	let memoria = os.totalmem();

	let memoriaGB = conversions.conversioBytesGigabytes(memoria);
	let memoriaMb = conversions.conversioBytesMegabytes(memoria);
	res.writeHead(200, { 'Content-Type':'text/html' });
	res.write(`<!doctype html>
				<html>
					<head>
						<meta charset="utf-8">
						<title>NodeJS</title>
					</head>

					<body>
						<h1>Jordi Ye puto amo</h1>
						<li>Sistema operatiu: ${sistema}</li>
						<li>Arquitectura: ${arquitectura}</li>
						<li>Memoria servidor: ${memoria}</li>

						<li>Memoria en GB: ${memoriaGB}</li>
						<li>Memoria en Mb: ${memoriaMb}</li>
						<h3>La meva tieta esta bona</h3>
						<h4>Ara no</h4>
					</body>
				</html>`);
	res.end();

});
*/
const server = http.createServer((req, res) => {
	let url = req.url;

	if (url.endsWith('web1.html')){
		fs.readFile('public/web1.html', (err, data) => {
			if(!err) {
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