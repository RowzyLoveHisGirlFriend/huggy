const discord = require('discord.js');
const superagent = require("snekfetch");

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/wallpaper')
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
  aliases: ["animewallpaper","wallpaper"], 
  permLevel: 0 
};
exports.help = {
  name: 'anime-wallpaper', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'wallpaper'
};