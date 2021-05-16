const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ files: [response.body.message] });
    });
  } else {
    msg.channel.send("**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["pornogif","porno-gif"], 
  permLevel: 0 
};
exports.help = {
  name: 'pgif', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'pgif'
};