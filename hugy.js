const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "yeniden bağlandım kral");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------------------------------------------------------------------//
//--------------------------------------Owner MSG---------------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on("guildCreate", guild => {
    let ownermesajj = guild.owner
  const ownermesaj = new Discord.MessageEmbed()
  .setTitle(`Sunucuna Eklendim!`)
  .setThumbnail(client.user.avatarURL())
  .addField('⚡️・Prefixim:', ayarlar.prefix)
  .addField("⚡️・**h.yardım**:", "Botun Yardım Menüsünü Atar.")     
  .addField("⚡️・**h.davet**:", "Botun Davet Linklerini Atar.")     
  .addField("⚡️・**Merak Etme**:", "Bu Mesaj Sadece Size Gönderildi.")     
  .setTimestamp()
  .setFooter('Bu mesaj sadece sunucu sahibine gönderildi')
  .setColor("0xffff00")
  ownermesajj.send(ownermesaj)
  });
//--------------------------------------------------------------------------------------------//
//--------------------------------------Owner MSG---------------------------------------------//
//--------------------------------------------------------------------------------------------//
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
//--------------------------------------------------------------------------------------------//
//--------------------------------------Prefix-Sistem-----------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on("message", async message => {//Rowzy Selçukun Amını Yer BAYYY

    if (message.author.bot) return;
  
    if (!message.guild) return;
  
    let prefix = db.get(`prefix_${message.guild.id}`);
  
    if (prefix === null) prefix = prefix;
  
  
  
    if (!message.content.startsWith(prefix)) return;
  
  
  
    if (!message.member)
  
      message.member = await message.guild.fetchMember(message);
  
  
  
    const args = message.content
  
      .slice(prefix.length)
  
      .trim()
  
      .split(/ +/g);
  
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
  
    if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (command) command.run(client, message, args);
  
  });//Rowzy Selçukun Amını Yer BAYYY
//--------------------------------------------------------------------------------------------//
//--------------------------------------Prefix-Sistem-----------------------------------------//
//--------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------//
//--------------------------------------Etiket-Prefix-----------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on('message', message => {
let prefix =   db.fetch(`prefix_${message.guild.id}`);
if (prefix === null) prefix = ("h.");
    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
     message.reply(`Prefix'im: **${prefix}**, Yardım için: **${prefix}yardım**`)
    }
    });
//--------------------------------------------------------------------------------------------//
//--------------------------------------Etiket-Prefix-----------------------------------------//
//--------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------//
//------------------------------------------SA-AS---------------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on("message", async (message, member, guild) => {
    let hugy = await db.fetch(`saas_${message.guild.id}`);
    if (hugy === "açık") {
      if (message.content.toLowerCase() === "sa") {
  message.channel.send(new MessageEmbed()
  .setDescription(`<@${message.author.id}> **Aleyküm Selam** , **Hoşgeldin !**`)
  .setFooter(`Bu mesaj kısa süre sonra silinecektir.`)
  .setColor('#8A2BE2')).then(x => x.delete({timeout: 50000}));    }
    }
  });
//--------------------------------------------------------------------------------------------//
//------------------------------------------SA-AS---------------------------------------------//
//--------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------//
//------------------------------------------EVERY---------------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == '@everyone' ) {
          try {
 
                  return msg.reply(
                    'Ever **Ayb**')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });
//--------------------------------------------------------------------------------------------//
//------------------------------------------EVERY---------------------------------------------//
//--------------------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------------------//
//-----------------------------------------Eklendim-------------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on('guildDelete', guild => {

      let hugyy = new Discord.MessageEmbed()
    
      .setColor("RANDOM")
      .setTitle(" Bot Kicklendi ")
      .addField("Sunucu Adı:", guild.name)
      .addField("Sunucu sahibi", guild.owner)
      .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
      .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
      .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
         client.channels.cache.get('836406097828249681').send(hugyy);
    
      });
    

    
      client.on('guildCreate', guild => {
    
      let hugyyy = new Discord.MessageEmbed()
    
      .setColor("RANDOM")
      .setTitle(" Bot Eklendi ")
      .addField("Sunucu Adı:", guild.name)
      .addField("Sunucu sahibi", guild.owner)
      .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
      .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
      .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

         client.channels.cache.get('836406075590049792').send(hugyyy);
    
      });
//--------------------------------------------------------------------------------------------//
//------------------------------------------Atıldım-------------------------------------------//
//--------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------//
//-------------------------------------------OtoRol-------------------------------------------//
//--------------------------------------------------------------------------------------------//
client.on("guildMemberAdd", async cmember => {
    if(!cmember.guild) return
    if(cmember.user.bot) return
    
    let cveri = await db.fetch(`hugyotorol.${cmember.guild.id}`)
    if(!cveri) return
    
    let ckanal = client.channels.cache.get(cveri.kanal)
    let crol = cmember.guild.roles.cache.get(cveri.rol)
    if(!ckanal || !crol) return
    
    cmember.roles.add(crol.id)
    ckanal.send(`${cmember} kullanıcısına **${crol.name}** rolü verildi.`)
    
    })
//--------------------------------------------------------------------------------------------//
//-------------------------------------------OtoRol-------------------------------------------//
//--------------------------------------------------------------------------------------------//

//---------------------------------------AFK TAGLI V12----------------------------------------------\\
client.on("message" , async msg => {
  
    if(!msg.guild) return;
    if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
    
    let afk = msg.mentions.users.first()
    
    const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
    
    const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
   if(afk){
     const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
     const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
     if(msg.content.includes(kisi3)){
  
         msg.reply(`Etiketlediğiniz Kişi AFK \nSebep : ${sebep}`)
     }
   }
    if(msg.author.id === kisi){
  
         msg.reply(`AFK'lıktan Çıktınız`)
     db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
      msg.member.setNickname(isim)
      
    }
    
  });

  //resimlihgbb

client.on('guildMemberAdd', async member => {
    const db = require ('quick.db')
    const ayar = db.fetch(`resim_${member.guild.id}`)
    if(!ayar)return;
    const canvas = require("discord-canvas"),
    welcomeCanvas = new canvas.Welcome();
  
  let image = await welcomeCanvas
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(member.guild.name)
    .setAvatar(member.user.avatarURL({format: "png"}))
    .setColor("border", "#00FF00")
    .setColor("username-box", "#00FF00")
    .setColor("discriminator-box", "#00FF00")
  .setText("title", "Hosgeldin")
  .setText("message", "Merhaba")
    .setColor("message-box", "#00FF00")
    .setColor("title", "#00FF00")
    .setColor("avatar", "#00FF00")
    .setBackground("https://cdn.discordapp.com/attachments/827256519695269898/828345157572886528/resimhgbb.jpg")
    .toAttachment();
  
  let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
  
  client.channels.cache.get(ayar).send(attachment)
  })
  client.on('guildMemberRemove', async member => {
    const db = require ('quick.db')
    const ayar = db.fetch(`resim_${member.guild.id}`)
    if(!ayar)return;
   const canvas = require("discord-canvas"),
    goodbyeCanvas = new canvas.Goodbye();
  
  let image = await goodbyeCanvas
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(member.guild.name)
    .setAvatar(member.user.avatarURL({format: "png"}))
    .setColor("border", "#8015EA")
    .setColor("username-box", "#8015EA")
    .setColor("discriminator-box", "#8015EA")
    .setColor("message-box", "#8015EA")
    .setColor("title", "#8015EA")
  .setText("title", "Bay Bay")
  .setText("message", "Gorusuruz")
    .setColor("avatar", "#8015EA")
    .setBackground("https://cdn.discordapp.com/attachments/827256519695269898/828345157572886528/resimhgbb.jpg")
    .toAttachment();
  
  let attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye-image.png");
  
  client.channels.cache.get(ayar).send(attachment)
  })
  
  //resimlihgbb

  client.on("guildMemberAdd", async member => {
    var SKanal = await db.fetch(`SKanal_${member.guild.id}`)
    const hedef = await db.fetch(`hedef_${member.guild.id}`)

    if(!SKanal) return;

    const hedef2 = hedef - member.guild.memberCount

    client.channels.cache.get(SKanal).send(`\📥 **${member}** katıldı seninle beraber **${member.guild.memberCount}** kişiyiz **${hedef}** kişi olmamıza **${hedef2}** kişi kaldı`)
})
client.on("guildMemberRemove", async member => {
    var SKanal = await db.fetch(`SKanal_${member.guild.id}`)
    const hedef = await db.fetch(`hedef_${member.guild.id}`)

    if(!SKanal) return;

    const hedef2 = hedef - member.guild.memberCount

    client.channels.cache.get(SKanal).send(`\📤 **${member}** ayrıldı senden sonra **${member.guild.memberCount}** kaldık **${hedef}** kişi olmamıza **${hedef2}** kişi kaldı`)
})