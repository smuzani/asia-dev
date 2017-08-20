var express = require('express');
var app = express();

var url = require('./controller/url.js');
app.use('/', url);

app.listen(process.env.PORT || 3000);
