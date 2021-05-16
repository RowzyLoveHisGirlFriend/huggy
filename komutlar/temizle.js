const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
if(!message.member.permissions.has('MANAGE_MESSAGES') && !message.member.roles.cache.has(hammer)) return message.channel.send("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor.").then(x => x.delete({timeout: 10000}))

if(!args[0]) return message.channel.send("Lütfen Silinecek Sayı Miktarını Giriniz.").then(m => m.delete({timeout: 5000}));
  
message.channel.bulkDelete(args[0]);
  
return message.channel.send(`**${args[0]}** Adet Mesaj Başarıyla Temizlendi.`).then(m => m.delete({timeout: 5000}));
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: []
}

exports.help = {
name: 'temizle'
};