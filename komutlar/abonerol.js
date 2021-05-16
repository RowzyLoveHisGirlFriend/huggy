let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abonerol'],
  perm: 0
}
exports.help = {
  name: 'abone-rol'
}

exports.play = {
  kullanım: '',
  açıklama: ''
}