const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(':small_red_triangle_down:','`!ban @Üye : Şeklinde Komutu Kullanarak Üyeleri Sunucunuzdan Banlarsınız `')
    .addField(':small_red_triangle_down:','`!ban-log #kanal : Şeklinde Komutu Kullanarak Banlanan Kullanıcıların Log Odasını Belirlersiniz !`')
    .addField(':small_red_triangle_down:','`!ban-yetkili-rol @Rol : Şeklinde Komutu Kullanarak Ban Yetkilisi Rolünü Belirleyebilirsiniz !`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/807711292629712946/807984158227431444/Ephoto360.com_1601db06e5b3d2.jpg') 
       .setThumbnail(client.user.avatarURL())
    .addField('**Not :**','`!ban-yetkili-rol Komutunda Rol De Üyeleri Yasaklar Rolüne Gerek Olmamaktadır !`')
  .setImage("https://api.creavite.co/out/c8931ee7-e8c5-464c-b202-a2ef6aa15f79_standard.gif")
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['bs'],
 permLevel: 0
};

exports.help = {
 name: 'ban-sistemi'
};