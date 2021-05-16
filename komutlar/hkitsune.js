const Discord = require("discord.js");
module.exports.run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Resim Yükleniyor Kendine Hakim ol :)`)

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hkitsune'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                m.channel.send({ files: [response.body.message] });
            
            m.edit(embed_nsfw);
        });
    });
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'hkitsune', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'hkitsune'
};