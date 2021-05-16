const Discord = require('discord.js');
exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Kime sarılacaksın ? **').catch(console.error);
    const baran =new Discord.MessageEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + '** adlı kişiye sarıldı. **<:asikrowzy:836459411244843018>') 
    .setImage('https://cdn.discordapp.com/attachments/736197586565857733/737570157588774964/sarl.gif')
    .setFooter(`${message.author.username} Tarafından kucaklandı`, message.author.avatarURL())
    return message.channel.send(baran);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sarıl',
  description: '',
  usage: ''
};