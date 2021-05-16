const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  
let yardım = new Discord.MessageEmbed()  
.setColor('PURPLE')
.addField(`**Huggy NSFW Komutlar**`,`

• Bu kanalda NSFW Kanal seçeneği açık olmadığından NSFW komutları kullanılamaz.

• Eğer +18 yaşından büyük iseniz Kanalı Düzenle > Genel Görünüm'e girin ve oradaki NSFW Kanal seçeneğini aktif ederek NSFW komutlarını kullanabilirsiniz.

\`h.4k\` = Rastgele 4K NSFW fotoğrafı gösterir.
\`h.porno-gif\` = Rastgele Porno Gifi gösterir.
\`h.anal\` = Rastgele Gif veya fotoğraf sevişmelerini gösterir.
\`h.pussy\` = Rastgele pussy fotoğrafı gösterir.
\`h.hentai\` = Rastgele Anime sevişmeleri gösterir.
\`h.ass\` = Rastgele göt fotoğrafları gösterir.
\`h.thigh\` = Rastgele Tayt fotoğrafı gösterir.
\`h.solo\` = Rastgele solo fotoğrafı gösterir.
\`h.anime-wallpaper\` = Rastgele Anime Wallpaper fotoğrafı gösterir.
\`h.hentai-gif\` = Rastgele hentai gif atar.
\`h.hkitsune\` = Rastgele Kedi veya Kurt Anime fotoğrafları gösterir.
\`h.pussy-art\` = Rastgele pussy-art fotoğrafları gösterir.
\`h.boobs\` = Rastgele boobs fotoğrafları gösterir.
`)
 message.channel.send(yardım) 
  
}; 
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["nsfw","nsfw-yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'nsfwyardım'
};