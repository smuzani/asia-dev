var botkit = require('botkit');

if (!process.env.token) {
	console.log("Error: specify token in environment");
	process.exit(1);
}

var controller = botkit.slackbot({
	debug:true
});

controller.spawn({
	token:process.env.token
}).startRTM();

controller.hears(['hi', 'hello', 'howdy'], 'direct_message,direct_mention,mention,ambient', function(bot, message) { 
	bot.reply(message, 'Hello there! :wave:'); 
});

controller.hears(['wod'], 'direct_message,direct_mention,mention,ambient', function(bot, message) { 
	var people = ['@smuzani', '@yunkie', '@dayya1512'];
	var person = people[Math.floor(Math.random()*people.length)];
	bot.reply(message, 'WOD goes to ' + person); 
});

controller.hears(['trip'], 'direct_message,direct_mention,mention,ambient', function(bot, message) { 
	bot.startConversation(message,function(err,convo) {

    convo.addQuestion('Where would you like to go?',function(response,convo) {

      convo.say('Cool, we will book a trip to ' + response.text);
      convo.next();

    },{},'default');

  })
});