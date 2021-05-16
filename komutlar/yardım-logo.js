const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('755712467367231548')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
.addField('**:white_check_mark: Logo Sistemi Komutları :white_check_mark:**',`
**\n:white_small_square: arrow-logo** : Ok Şeklinde Logo Atar
**:white_small_square: blue-logo** : Mavi Bir Logo Atar
**:white_small_square: booking-logo** : Kırmızı Bir Logo Atar
**:white_small_square: bubble-logo** : Mavi 3D Logo Atar
**:white_small_square: bubble2-logo** : Turuncu 3D Logo Atar
**:white_small_square: bubble3-logo** : Mavi-Beyaz 3D Logo Atar
**:white_small_square: comic-logo** : Sohbet Balonunda Logo Atar
**:white_small_square: cool-logo** : Havalı Bir Logo Atar
**:white_small_square: discord-logo** : Discord Logo Atar
**:white_small_square: fire-logo** : Ateşli Logo Atar **(FAVORİ)**
**:white_small_square: gold-logo** : Altın Renginde 3D Logo Atar
**:white_small_square: gold2-logo** : Altın Renginde Logo Atar
**:white_small_square: green-logo** : Yeşil Logo Atar **(FAVORİ)**
**:white_small_square: müzik-logo** : Müzik Logo Atar **(FAVORİ)**
**:white_small_square: skull-logo** : Kafatası Logo Atar
**:white_small_square: kalp-logo** : Kalp Logo Atar`)
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=835973268007288892&scope=bot&permissions=8)\n[:white_check_mark: Destek Sunucu](https://discord.gg/zRFcQKyCYu)")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'logo-sistemi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   