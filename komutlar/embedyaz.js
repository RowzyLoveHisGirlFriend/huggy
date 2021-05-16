const Discord = require("discord.js");

exports.run = async function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "⚠️ Bu Komutu kullanmanız için `Mesajları Yönet` yetkisine sahip olmalısınız."
    );
  let hugy = args.slice(0).join(" ");
  if (hugy.length < 1) {
    return message.channel.send(`Yazmamı istediğin kelime/cümleyi gir!`);
  } else {
    const hugyembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${hugy}`)
      .setFooter("", client.user.avatarURL);
    return message.channel.send(hugyembed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["embedyaz"],
  permLevel: 0
};

exports.help = {
  name: "yaz",
  description: "yaz.",
  usage: "yaz"
};