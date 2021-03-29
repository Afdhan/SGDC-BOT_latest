let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://api.xteam.xyz/randomimage/hentai?APIKEY=abba3220ce4a347f'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'Mending lu tobat dah :v\n\n*[ • SGDC-BOT • ]*', m)
   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(hentai)$/i
handler.owner = false


handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//    MUHAMMAD AFDHAN
