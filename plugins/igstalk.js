let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Username!', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://mhankbarbar.herokuapp.com/api/stalk?username=${text}`).then((res) => {
    let hasil = `${res.data.result}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(igstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

