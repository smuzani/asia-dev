var fs = require('fs');

var myFile = 'index.js';
fs.readFile(myFile, 'utf8', function(err, txt) {
	if (err) {
		console.log(err);
	};

	txt = txt + '\n Appended something';
	fs.writeFile(myFile, txt, function(err) {
		if (err) return console.log(err);
		console.log('Appended text...');
	});
});

function appendText(txt, err) {
	if (err) {
		console.log(err);
	};

	txt = txt + '\n Appended something';
	fs.writeFile(myFile, txt, notifyUser);
}

function notifyUser(err) {
	if (err) return console.log(err);
	console.log('Appended text...');
}