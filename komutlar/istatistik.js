const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const zaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const hugy = new Discord.MessageEmbed()
   
    
  .setColor("#00fff7")
  .addField("**Bot Sahibi**", "<@696435185658363956> | **YankeeOfTheWorld ৳#1337**", )
  .addField(" **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField(" **Kullanıcılar**",bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(' **Kanallar**' , bot.channels.cache.size,true)
  .addField(' **Ram Kullanım Oranı**', ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}  `, true)
  .addField('> **Ping**', bot.ws.ping + 'ms',true)
  .addField(' **Çalışma Süresi**', zaman,true) 
  
  return message.channel.send(hugy);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatistik"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};