const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": "<a:0_:836057379627466774>",
  "1": "<a:1_:836057379366764595>",
  "2": "<a:2_:836057380386897950>",
  "3": "<a:3_:836057379858284545>",
  "4": "<a:4_:836057379610427463>",
  "5": "<a:5_:836057381170446397>",
  "6": "<a:6_:836057381045403678>",
  "7": "<a:7_:836057379841507349>",
  "8": "<a:8_:836057380277321738>",
  "9": "<a:9_:836057380755734559>",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '<:cevrimdisi:836427301528666142> **Çevrimdışı Kişi Sayısı** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '<a:donentac:836428248610111509> **Sunucudaki Toplam Kişi Sayısı:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "online"
  ).size;
  let online = '<:cevrimici:836427301477417000> **Gerçek Üye Sayısı:** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
//.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('Hugy Bot Emojili Say')
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayısı: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};
