var express = require('express');
var app = express();
var sheetsuURL = "https://sheetsu.com/apis/v1.0/175d7405f489/";

app.get(sheetsuURL, function (req, res) {
	res.send("Hello world!");
});

app.listen(3000);