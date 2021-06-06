let axios = require("axios");
let MessageType = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukan Nama!_', m)
    if (text.length > 15) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 15 huruf!_', m)
   await m.reply(global.wait)
   let link = 'https://onlydevcity.xyz/FFSerti2/img.php?nama=' + encodeURIComponent(text);
   conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
   } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(ffserti2)$/i
//  MUHAMMAD AFDHAN

module.exports = handler