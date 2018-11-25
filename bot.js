const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
    client.user.setGame(`ياخايننء الءك يوم تجي فيه وتندم~x`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
