//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd
const chalk = require('chalk');
const moment = require('moment');
require("moment-duration-format");
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Attack bot logged with name: ${client.user.username} name`);
  client.user.setStatus("online");
  client.user.setActivity(`🔥ATTACK BOT IS READY - DEVELOPED BY TERBYT`, { type: "PLAYING"});
};
//This code belong to Terbyt. github.com/Terbyt | www.terbyt.rf.gd
