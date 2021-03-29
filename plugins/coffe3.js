let axios = require("axios");
let handler = async(m, { conn, text }) => {
let user = global.DATABASE._data.users[m.sender]
if (user.prems) {
    if (!text) return conn.reply(m.chat, 'Silahkan Masukan Teks!', m)

   if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!* _Maksimal 10 huruf!_', m)
   

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://fzn-gaz.herokuapp.com/api/kopi?text=' + text

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
   } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(coffe(cup)?3)$/i


handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN