let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Masukkan Text!*', m)

	axios.get(`https://api.terhambar.com/bpk?kata=${text}`).then ((res) => {
	 	let hasil = `${res.data.text}\n\n*[ • SGDC-BOT • ]*`

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(alay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
