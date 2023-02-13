const discord = require('discord.js-selfbot-v11');
const config = require("./config.json");
const fs = require('fs');

const client = new discord.Client();
const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/spotify`);
	client.on(eventname, event.bind(null, client));
});

client.login(config.token);