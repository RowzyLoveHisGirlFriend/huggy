const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
 exports.run = (client, message, args) => {
   let oylama =  args.join(' ');
  if (!oylama) return message.reply('Oylama Sorusu Belirtmeden Oylama Yapamam .')
   
   
 
  const hugyoylama = new Discord.MessageEmbed()
  .setDescription(`${oylama}`)
  .setFooter(`${message.author.tag} Tarafından`)
  return message.channel.send(hugyoylama).then(function(message) {

         message.react('✅');

         message.react('❌');

  });

 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama'
};