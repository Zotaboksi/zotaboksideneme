const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
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
    } catch (e){
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
    } catch (e){
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
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm selam**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.reply('**Argo Kelime Kullanma**');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktirgit') {
    msg.reply('**Argo Kelime Kullanma**');
  }
if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }

  if (msg.content === 'sa') {
   	msg.reply('**Sunucuda Argo Kelime Kullanma**');
  }

  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
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

function cpanel1() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel2();
      }, 1000);
    });
}

function cpanel2() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`🔵⚫️⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`🔵⚫️⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`www.Auranw.denince.biz`);
          
          cpanel3();
      }, 1000);
    });
}
function cpanel3() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`🔵🔵⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`🔵🔵⚫️⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel4();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel4() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`🔵🔵🔵⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`🔵🔵🔵⚫️⚫️⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`www.Auranw.denince.biz`);
          
          cpanel5();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel5() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️🔵🔵🔵⚫️⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`⚫️🔵🔵🔵⚫️⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel6();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel6() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️🔵🔵🔵⚫️⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️🔵🔵🔵⚫️⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`www.Auranw.denince.biz`);
          
          cpanel7();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel7() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️🔵🔵🔵⚫️⚫️`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️🔵🔵🔵⚫️⚫️`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel8();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel8() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️⚫️🔵🔵🔵⚫️`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️⚫️🔵🔵🔵⚫️`);
          client.channels.get(`617339266904883234`).setName(`www.Auranw.denince.biz`);
          
          cpanel9();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel9() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️⚫️⚫️🔵🔵🔵`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️⚫️⚫️🔵🔵🔵`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel10();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel10() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️🔵🔵`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️🔵🔵`);
          client.channels.get(`617339266904883234`).setName(`www.Auranw.denince.biz`);
          
          cpanel11();
      }, 1000); //Hızı düşürmeyin
    });
}
function cpanel11() {
  return new Promise(resolve => {
      setTimeout(() => {
          client.channels.get(`617340359621607447`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔵`);
          client.channels.get(`617340381436051456`).setName(`⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔵`);
          client.channels.get(`617339266904883234`).setName(`Play.Auranw.com`);
          
          cpanel1();
      }, 1000); //Hızı düşürmeyin
    });
}





client.on('ready', async message => {
 cpanel1();
})
client.on('message', (message) => {
  let Kanal = (message.guild.channels.find(channel => channel.name === `${message.guild.members.size}`))
  setInterval(() => {
    Kanal.setName(`Sunucu Üye Sayısı: ${message.guild.members.size}`)
  }, 120000)
})

client.on('message', async message => {
  const prefix = message.content.slice(prefix.length).trim().split(/ +/g);
  const Komut = prefix.shift().toLowerCase();
  if (Komut === "is") {
    if (message.guild.channels.find(channel => channel.name === `${message.guild.members.size}`)) return message.channel.send("İstatistik Paneli Zaten Ayarlanmış.")
    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send("Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.")
    message.channel.send(`İstatistik kanallarının kurulumu başlatılsın mı? Onaylıyorsanız **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
        message.guild.createChannel('İstatistik Kanalı', 'category', [{
          id: message.guild.id
        }])

        message.guild.createChannel(`Sunucu Üye Sayısı: ${message.guild.members.size}`, 'voice', [{
          id: message.guild.id,
          deny: ['CONNECT']
        }])
          .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "İstatistik Kanalı")))
            message.channel.send("Gerekli kanal kuruldu!")
      })   
  }
})

client.login(ayarlar.token);
