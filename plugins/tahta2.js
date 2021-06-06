let axios = require("axios");
let kntl = require("../src/kntl.json");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
let api = (kntl.xteam)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
 try {
    await m.reply(global.wait)
    let link = 'https://api.xteam.xyz/tahta?text=' + encodeURIComponent(text) + '&APIKEY=' + api;
    conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(tahta2)$/i

module.exports = handler