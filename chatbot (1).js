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
	client.action('AzimuthAsh', 'Mod is here');
});

//logging messages and answering to hello

client.on('message',(channel,tags, message, self)=>{
	if(self) return;
	console.log(message);
	console.log(tags);
	if (message.toLowerCase() === 'hello', 'hi', 'hey'){
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
	if (message.toLowerCase() === 'how are you'){
		client.say(channel, `@${tags.username}, I'm great, I know Azi is having fun on the game`);
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

//make chatbot react to new follower




