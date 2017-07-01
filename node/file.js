var fs = require("fs");

var data = fs.readFile('index.js', function (err, data){
	if (err) return console.error(err);
	else {
		console.log(data.toString());
	}
});
		
console.log('end of program');
