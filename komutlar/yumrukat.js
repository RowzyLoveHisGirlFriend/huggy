const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


    if (message.mentions.users.size < 1) return message.reply('**Kimi Yumruklayacağımı Yazmalısın**').catch(console.error);

    const baranbaba =new Discord.MessageEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + '** adlı kişiyi, Yumrukladı **')
    .setImage('https://media1.tenor.com/images/c7dece5cdd4cee237e232e0c5d955042/tenor.gif?itemid=4902914')
    .setFooter(`${message.author.username} Tarafından Yumruk Atıldı`, message.author.avatarURL())
    return message.channel.send(baranbaba);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yumrukat',
  description: '',
  usage: ''
};