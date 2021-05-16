const discord = require('discord.js');
const superagent = require("snekfetch");

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/cum')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ files: [response.body.url] });
    });
  } else {
    msg.channel.send("**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["boşalma"], 
  permLevel: 0 
};
exports.help = {
  name: 'cum', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'cum'
};