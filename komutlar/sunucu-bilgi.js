const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (client, message, params) => {
       const tarih =  message.guild.createdAt
   var verti = message.guild.verificationLevel;
   const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];
let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
let verifLevels = ["Yok", "Düşük", "Orta", "Yüksek", "Çok yüksek"];
let region = {
       "brazil": ":flag_br: Brazil",
       "europe": ":flag_eu: Europe",
       "India": ":flag_in: India",
       "japan": ":flag_jp: Japan",
       "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
  
   const embed = new Discord.MessageEmbed()
      .setColor("#1b1b1f")
      .setThumbnail(message.guild.iconURL({ dynamic: true}))
      .addField(':label: Sunucu Adı:', message.guild.name, true)
      .addField(':id: Sunucunun ID si:', message.guild.id, true)
      .addField(':map: Sunucunun Bölgesi:', region[message.guild.region], true)
      .addField(':id: Sunucu Sahibinin ID si:', message.guild.id, true)
      .addField(':bust_in_silhouette: Sunucunun Sahibi:', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
      .addField(':shield: Doğrulama seviyesi:', message.guild.verificationLevel, true)
      .addField(`:busts_in_silhouette: Üyeler: [${message.guild.memberCount}]`, ` **${message.guild.members.cache.filter(m => m.user.presence.status === "online").size}** Çevrimiçi \n **${message.guild.members.cache.filter(m => m.user.presence.status === "idle").size}** Boşta \n **${message.guild.members.cache.filter(m => m.user.presence.status === "dnd").size}** Rahatsız Etmeyin \n **${message.guild.members.cache.filter(m => m.user.presence.status === "offline").size}** Çevrimdışı \n **${message.guild.members.cache.filter(m => m.user.presence.status === "streaming").size}** Yayında \n:robot: **${message.guild.members.cache.filter(m => m.user.bot).size}** Bot `, true)
      .addField(' Kanallar:', `:speech_balloon: Metin: **${message.guild.channels.cache.filter(c => c.type === "text").size}** \n :loud_sound: Sesli: **${message.guild.channels.cache.filter(c => c.type === "voice").size}** \n  Kategori: **${message.guild.channels.cache.filter(c => c.type === "category").size}**`, true)
      .addField(' Yükseltmeler',`<a:boost:837835112330559509> Boost sayısı:** ${message.guild.premiumSubscriptionCount} \n  **Boost seviyesi:** ${message.guild.premiumTier}**`, true)
      .addField(':zzz: AFK Kanalı', message.guild.afkChannel || 'Ayarlanmamış', true)
   		.addField(':stopwatch: AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`, true)
      .addField(` Emojiler: [${message.guild.emojis.cache.size}]`, `**h.emojiler** yazarak sunucudaki bütün emojileri görüntüleyebilirsiniz.`)
      .addField(` Roller: [${message.guild.roles.cache.size}]`, `**h.roller** yazarak sunucudaki bütün rolleri görüntüleyebilirsiniz.`)
      .addField(':calendar_spiral: Sunucunun Oluşturma tarihi:', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
   message.channel.send({embed});
   message.react('✓');
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sunucu', 'sunucubilgi'],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucu-bilgi'
 };