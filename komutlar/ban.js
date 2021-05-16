const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('**Ban Yetkili** Rolü Ayarlanmamış Veya <@&' + rol + '> Rolüne Sahip Değilsin !')
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('**Ban Log** Sistemi Ayarlanmamış.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('Bir **Kişi** Etiketlemelisin.')
     if(user.id === message.author.id) return message.channel.send('Kendini Yasaklayamazsın !')
     if(user.id === client.user.id) return message.channel.send('Botu Yasaklayamazsın !')
  if(user.id === message.guild.ownerID) return message.channel.send('Sunucu Sahibini Yasaklayamazsın !')
    if (!message.guild.member(user).bannable) return message.reply('Bu Kişinin Rolü Senden Üstte Veya `Üyeleri Yasakla` Yetkisine Sahip.');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Kişi banlandı')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('**Yasaklama** İşlemi İptal Edildi.')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}