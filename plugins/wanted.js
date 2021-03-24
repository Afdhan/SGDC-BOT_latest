let axios = require("axios");
let handler = async(m, { conn, text }) => {
let [s1, s2] = text.split `|`
    if (!s1) return conn.reply(m.chat, 'Silahkan masukan text1', m)
    if (!s2) return conn.reply(m.chat, 'Silahkan masukan text2', m)

   if (s1 > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!* _Maksimal 10 huruf!_', m)
   if (s2 > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!* _Maksimal 10 huruf!_', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://videfikri.com/api/textmaker/wanted/?urlgbr=https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/02/anjing1.jpg&text1=' + s1 + '&text2=' + s2 

conn.sendFile(m.chat, link, 'KEMTOD.png', 'Nihh Cukk', m)
}

handler.command = /^(wanted)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler