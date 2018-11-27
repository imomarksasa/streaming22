const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



const Discord = require("dicord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Surprise Mother Fucker :smiley: ',
     details: Im : Admin - Developer and Programmer,
     url: 'http://twitch.tv/Streammingg',
     state: إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ,
    application_id: '281376075802476544',
     assets: {
        small_image: 366835431037337600,
        small_text: ' Take This ! ' ,
        large_image: 370451271133429760,
        large_text: ҜṦẰ FOREVER ♥ }

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
