let axios = require("axios");
let handler = async(m, { conn, text }) => {
/*let user = global.DATABASE._data.users[m.sender]
if (user.prems) {*/
let [fx, xs] = text.split `|`
    if (!fx) return conn.reply(m.chat, 'Effect tidak boleh kosong!', m)
    if (!xs) return conn.reply(m.chat, 'Silahkan masukan teks', m)

   if (fx > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!* _Maksimal 10 huruf!_', m)
   if (xs > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!* _Maksimal 10 huruf!_', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://api.xteam.xyz/photooxy/' + fx + '?text=' + xs + '&APIKEY=abba322a347f'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
 // } else if (!user.prems) m.reply('*FITUR INI KHUSUS UNTUK USER PREMIUM!*')
}

handler.command = /^(photooxy)$/i
handler.premium = true

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN

