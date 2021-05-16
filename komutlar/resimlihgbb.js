const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
const kanal = message.mentions.channels.first();
  const vra = db.fetch(`resim_${message.guild.id}`)
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":no_entry: Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmanız gerek.");
  if(args[0] === 'sıfırla'){
    message.channel.send('Başarılı')
    db.delete(`resim_${message.guild.id}`)
  }
  if(args[0] === 'aç'){
    if(vra)return message.channel.send('Zaten Resimli-Hgbb Ayarlı Sıfırlamak İçin .resimli-hgbb sıfırla')
     if(!kanal) return message.channel.send('Lütfen Bir Kanal Etiketleyiniz')
    const embe = new Discord.MessageEmbed()
  .setTitle('Başarılı')
  .setDescription(`Başarıyla Resimli Hgbb Kanalını ${kanal} Olarak Ayarladım`)
  .setColor('GREEN')
  message.channel.send(embe)
  db.set(`resim_${message.guild.id}`, kanal.id)
  }
};
exports.conf = {
  aliases: ['resimli-hg-bb'],
  permLevel: 0
};
exports.help = {
  name: 'resimli-hgbb'
};