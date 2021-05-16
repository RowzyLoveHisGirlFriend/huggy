const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    let kanal = message.mentions.channels.first()
    const hedef = args[1]

    if(!kanal) return message.channel.send(`Lütfen Bir Kanal Etikeylin`)
    if(!hedef) return message.channel.send(`Hedef Girin`)
    if(isNaN(hedef)) return message.channel.send("Hedef Girin")
    if(message.guild.memberCount > hedef) return message.channel.send("Hedefiniz Sunucu Üye Sayısından Küçük Olamaz")

    db.set(`SKanal_${message.guild.id}`, kanal.id)
    db.set(`hedef_${message.guild.id}`, hedef)

    message.channel.send(`\ ✅ Kanal ${kanal} olarak ayarlandı kişi ise ${hedef} olarak ayarlandı.`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 2
};
  
  exports.help = {
    name: 'sayaç',
    description: '',
    usage: 'sayaç'
};