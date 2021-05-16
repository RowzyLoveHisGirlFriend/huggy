const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

       let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('Ban log kanalını belirtmelisin')

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`**Ban Log** Kanalı <#${kanal.id}> Olarak **Ayarlandı !**`)
  
 }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "ban-log"
}