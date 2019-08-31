const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        " zt!yardım |" + client.guilds.size + " Sunucu " + client.users.size + " Kullanıcı ", 
        "👔Yapımcım| Zotaboksii👔 ",
        "💪 7/24 Aktif!",
        "💡 zt!davet | Botumuzu ekleyin",
        "👨  +100 kullanıcı" ,
        "🌍  4 Sunucu  !",
        "🔥+yardım | +davet | +otorol 🔥"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://twitch.tv/scarew0");
        }, 2 * 2500);
}
