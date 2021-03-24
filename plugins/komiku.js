let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Text Parameter!', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://st4rz.herokuapp.com/api/chord?q=${text}`).then((res) => {
    let hasil = `${res.data.result}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(komiku)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler