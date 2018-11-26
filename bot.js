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

client.on('message', message => {
    if (message.content === 'سلام عليكم') {
    	message.reply('وعليكم السلام');
  	}
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'public-chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(' نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
      
   
      channel.sendEmbed(embed);
    });



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
