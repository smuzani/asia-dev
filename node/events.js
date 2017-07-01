var events = require('events');
var emitter = new events.EventEmitter();

var username = "user";
var password = "pass";

emitter.on("myEvent", function(){
	console.log("Event fired");
});

emitter.on("userAdded", function(username, password){
	console.log("User added: " + username);
});

emitter.addListener("myEvent", reminder);

emitter.emit("myEvent");
emitter.emit("myEvent");

function reminder() {
	console.log("Reminder that event fired");
}

emitter.removeListener("myEvent", reminder);
emitter.emit("myEvent");
emitter.emit("userAdded", username, password);