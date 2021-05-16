const Discord = require('discord.js');

exports.run = async(client, message) => {
  if (!message.guild) {
    
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor("RED")
  .addField("Uyarı","Bu Komutu Dm'de Kullanamasın !");
    
  return message.author.send(ozelmesajuyari);
  }
const swico = new Discord.MessageEmbed()
.setColor('GREEN')
.addField('Sunucu İcon', `[Hareketsiz Göster](${message.guild.iconURL ({dynamic: false, size: 1024, format: 'png'})})`)
.setImage(`${message.guild.iconURL ({dynamic: true, size: 1024, format: 'png'})}`)
.setFooter(`Hugy | Sunucu İcon`)
message.channel.send(swico)
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sunucuicon', 'icon', 'sunucu-icon'],
permLevel: 0
};

exports.help = {
name: 'swico',
description: 'sw icon',
usage: 'sicon' };