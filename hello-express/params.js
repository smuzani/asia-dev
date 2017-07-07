var express = require('express');
var app = express();

app.get("/things/:name/:id", function (req, res) {
	res.send(req.params);
});

app.listen(3000);