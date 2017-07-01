var http = require('http');

console.log(__filename + " " + __dirname);
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var msg = "Hello node!";
	res.write(msg)
	res.end(msg);
}).listen(8080);

console.log('Server started on port 8080');