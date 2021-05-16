const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let hugyistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.MessageEmbed()
  .setDescription(`İstek Kanalı ${hugyistekkanal} olarak ayarlandı.`)
  .setColor("#00ff88")
  .setFooter(`Hugy | İstek Kanal Sistemi.`, client.user.avatarURL());
  const cfx2 = new Discord.MessageEmbed()
  .setDescription(`İstek Kanalı Kapatıldı.`)
  .setColor("#00ff88")
  .setFooter(`Hugy | İstek Kanal Sistemi.`, client.user.avatarURL());
  const cfxembed = new Discord.MessageEmbed()
  .setTitle(`**\`İstek-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}istek-kanal sıfırla\``)
  .setColor("#00ff88")
  .setFooter(`Hugy | İstek Kanal Sistemi.`, client.user.avatarURL());
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == hugyistekkanal) return db.set(`istekkanal${message.guild.id}`, hugyistekkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, hugyistekkanal.id)
    message.channel.send(cfx1)
    
    
  }
  
  if (args[0] == 'sıfırla') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ikanal'],
  permLevel: 0 
};

exports.help = {
  name: 'istek-kanal',
  description: '',
  usage: ''
};