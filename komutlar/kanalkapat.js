const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('❌ Uyarı :x;', '`kilit`Dm kapatırsan nasıl bana ulaşıcaksın evlat!.')
  return message.author.sendEmbed(ozelmesajuyari); }
 
  

message.channel.send(`Kanal Başarıyla Kilitlendi Yönetici Yetkisi olmayan kimse kanalı göremiyecek`)
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false,
      READ_MESSAGES: false
    }).then(() => {
   
    });
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalkapat','kk'],
  permLevel: 2,
  kategori:'moderasyon2'
};

exports.help = {
  name: 'kanalkapat',
  description: 'Kanalı  mesaj yazmaya kapatır.',
  usage: 'kilit'
};