const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
	console.log("Bruh!");
});

client.on('message', (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(prefix + "quirk"))
		(message.channel.send("Önce bir karakter söylemelisin."));

	if (message.content.startsWith(prefix + 'aradia')) {
		var newMessage = message.content.replace("!aradia ", "");
		message.channel.send(newMessage.replace(/o/gi, "0"));
	}
	
});
client.login(process.env.TOKEN);