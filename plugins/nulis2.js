let axios = require("axios");
let kntl = require("../src/kntl.json");
let MessageType = require("@adiwajshing/baileys")
let handler  = async (m, { conn, text }) => {
    let api = (kntl.zekskey)
    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
 try {
  await m.reply(global.wait)
  let link = 'https://api.zeks.xyz/api/nulis?text=' + text + '&apikey=' + api;
   conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  } catch (e) {
   m.reply('```Error```')
  }
} 

handler.command = /^(nulis2)$/i

//  MUHAMMAD AFDHAN
module.exports = handler