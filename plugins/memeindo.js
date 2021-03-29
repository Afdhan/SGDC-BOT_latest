let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://api.zeks.xyz/api/memeindo?apikey=apivinz'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
  } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(meme(indo)?)$/i


handler.fail = null


module.exports = handler

//    MUHAMMAD AFDHAN