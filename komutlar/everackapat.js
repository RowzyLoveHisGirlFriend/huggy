const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const alfa = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || alfa.prefix 
  
  if (!args[0]) return message.channel.send(`**Ever Ayb** Sistemini Açmak için **Aç** veya **Kapat** yazınız! \nÖrnek: **${prefix}ever-ayb aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':hypesquad1: **Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!**')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`Artık bot **everyone** diyince **Ayb** diyecek!\n Kapatmak için "\`${prefix}ever-ayb kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`Artık biri **everyone** diyince cevap vermeyecek!`)

  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["everayb-ayarla"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "ever-ayb",
  description: "everayb",
  usage: "ever-ayb-ayarla"
}; 