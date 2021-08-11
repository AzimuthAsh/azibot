const tmi = require('tmi.js');

const options = {
	options: {
		debug: true,
		},
	connections: {
		cluster: 'aws',
		reconnect: true,
		secure: true,
	},
	identity: {
		username: 'sxtuxa',
		password: 'oauth:9cnghe4vz6nsxlfmf6g0nbfiy85eau',//authenticator of bot account
	},
	channels: ['AzimuthAsh'],
};

const client = new tmi.client(options);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

//connect to twitch
client.connect();

//once connected sends here message in chat
client.on('connected', (address, port) => {
	client.action('AzimuthAsh', 'Mod is here,type !dice to roll the dice. Can you roll a 6?');
});

//logging messages and answering 

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'hello'){
		client.say(channel, `@${tags.username}, hey, welcome to the stream !`);
	}
});


///

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'hi'){
		client.say(channel, `@${tags.username}, hi, welcome to the stream !`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'hey'){
		client.say(channel, `@${tags.username}, hey, welcome to the stream !`);
	}
});

//answering to wassup

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'wassup'){
		client.say(channel, `@${tags.username}, wassup how is it going`);
	}
});


client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'wassup?'){
		client.say(channel, `@${tags.username}, wassup how is it going`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'skal'){
		client.say(channel, `@${tags.username}, SKAL!`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'Skal'){
		client.say(channel, `@${tags.username}, SKAL!`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'skal!'){
		client.say(channel, `@${tags.username}, SKAL!`);
	}
});


client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'Skal!'){
		client.say(channel, `@${tags.username}, SKAL!`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'how are you?'){
		client.say(channel, `@${tags.username}, I'm great, I know Azi is having fun on the game`);
	}
});
client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'awora'){
		client.say(channel, `@${tags.username}, AWORA!`);
	}
});


client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'awo'){
		client.say(channel, `@${tags.username}, awoooooooooooo`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'how are you'){
		client.say(channel, `@${tags.username}, chilling in the sun!!! SXM !`);
	}
});

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'puff'){
		client.say(channel, `@${tags.username}, 420 420 420 420 420 420 420 420 420 420 420`);
	}
});

//recognition of !dice
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } 
  
const commandName = msg.trim();
// dice game
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}






