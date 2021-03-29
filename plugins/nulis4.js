let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan Masukan Teks!', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'https://lindow-api.herokuapp.com/api/nulis?text=' + text + '&apikey=LindowGanteng'

conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*[ • SGDC-BOT • ]*', m)
}

handler.command = /^(nulis4)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


//   MUHAMMAD AFDHAN