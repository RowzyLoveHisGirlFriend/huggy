const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let user = message.mentions.users.first() || message.author  
const exampleEmbed = new Discord.MessageEmbed()
 .setImage(user.avatarURL({dynamic: true}))
.setColor("ROLE")
.setDescription(`***İşte Avatar :***`)
  message.channel.send(exampleEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'avatar',
  description: 'Avatar Çalmaya Yarar.',
  usage: 'avatar'
}; 