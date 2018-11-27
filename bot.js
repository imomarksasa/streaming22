const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log(' by alaseri');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'هاي يوتيوووب',
     details: `هاي يوتيوب`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'هاي يوتيوب',
        large_image: `377480353259978752`,
        large_text: `هاي يوتيوب` }

  }
    });
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
