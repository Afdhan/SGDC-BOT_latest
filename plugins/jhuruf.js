let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan kata kunci', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${text}`).then((res) => {
    let hasil = `_JUMLAH ADA:_ *${res.data.result.jumlah}*`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(jhuruf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler