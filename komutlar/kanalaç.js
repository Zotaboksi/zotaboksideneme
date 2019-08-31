const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('❌ Uyarı :x;', '`kilit`Benim Mesaj Kutum Sana Açık Zaten. :?')
  return message.author.sendEmbed(ozelmesajuyari); }
 
  

message.channel.send(`Kanal Başarıyla Açıldı Herkes Kanalı görebilir`)
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true,
      READ_MESSAGES: true
    }).then(() => {
   
    });
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalaç','ka'],
  permLevel: 2,
  kategori:'moderasyon'
};

exports.help = {
  name: 'kanalaç',
  description: 'Kanalı  mesaj yazmaya açar.',
  usage: 'ka'
};