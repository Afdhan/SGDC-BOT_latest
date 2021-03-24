let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan kata kunci', m)

  //await m.reply('*[ WAIT ]* _Sedang Diproses..._')
axios.get(`https://videfikri.com/api/hurufterbalik/?query=${text}`).then((res) => {
    let hasil = `*${res.data.result.kata}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(teksbalik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
