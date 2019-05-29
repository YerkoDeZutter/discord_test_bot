const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const env = require('dotenv');
env.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

  if(message.content.toLowerCase() == 'bram'){
    message.channel.send('<@'+process.env.BRAM+'>');
  } else if (message.content.toLowerCase() == 'alesandro') {
    message.channel.send('<@'+process.env.ALESANDRO+'>');
  } else if (message.content.toLowerCase() == 'yerko') {
    message.channel.send('<@'+process.env.YERKO+'>');
  } else if (message.content.toLowerCase() == 'evert') {
    message.channel.send('<@'+process.env.EVERT+'>');
  } else if (message.content.toLowerCase() == 'dilano') {
    message.channel.send('<@'+process.env.DILANO+'>');
  } else if (message.content.toLowerCase() == 'nino') {
    message.channel.send('<@'+process.env.NINO+'>');
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

	console.log(message.content);
  if (command === 'ping') {
  	message.channel.send('Pong.');
  }
  else if (command === `beep`)
  {
  	message.channel.send('Boop.');
  }
  else if (command === `server`)
  {
  	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if (command === `user-info`)
  {
  	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  else if (command === 'args-info')
  {
  	if (!args.length) {
  		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  	}

  	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
  else if (command === 'avatar')
  {
  	if (!message.mentions.users.size) {
  		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
  	}
  }
});

client.login(process.env.TOKEN);
