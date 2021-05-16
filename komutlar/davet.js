const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('YELLOW')
  .setThumbnail('')
  .setDescription(`Bu Botu Sunucuna Ekleyebilirsin Linki Aşşağıda

[Bot Davet](https://discord.com/oauth2/authorize?client_id=835973268007288892&scope=bot&permissions=805314622) 

`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}