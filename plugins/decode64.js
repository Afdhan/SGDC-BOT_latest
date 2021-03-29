let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Teks!', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
axios.get(`https://api.anoncybfakeplayer.com/api/base64/?decode=${text}`).then((res) => {
    let hasil = `${res.data.result}\n\n*[ • SGDC-BOT • ]*`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(decode(64)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


// MUHAMMAD AFDHAN