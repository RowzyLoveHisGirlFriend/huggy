const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    try {
      const hugyembed = new Discord.MessageEmbed()
.setTitle("Hugy Komutlar")
.setDescription(`${client.commands.map(props => `\`${props.help.name}\``).join(" \n ")}`);
message.channel.send(hugyembed)
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
  
};
