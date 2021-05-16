const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {

var prefix = ayarlar.prefix;   
    
let cveri = await db.fetch(`hugyotorol.${message.guild.id}`)
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()


if(args[0] === "sıfırla"){
if(!cveri) return message.channel.send("Zaten sistem kapalı")


db.delete(`hugyotorol.${message.guild.id}`)
message.channel.send("Sistem sıfırlandı")
return
}

if(!rol) return message.channel.send("Lütfen bir rol etiketle **h.otorol sıfırla | h.otorol @rol #kanal**")
if(!kanal) return message.channel.send("Lütfen bir kanal etiketle **h.otorol sıfırla | h.otorol @rol #kanal**")

db.set(`hugyotorol.${message.guild.id}`, {rol: rol.id, kanal: kanal.id})
message.channel.send(`İşlem başarılı! Rol: ${rol} Kanal: ${kanal}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: '',
  usage: ''
};