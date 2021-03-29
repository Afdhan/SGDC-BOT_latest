let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan Nomor Telpon yang akan di Spam!\ncontoh: !spamcall 85372827287', m)

	axios.get(`https://tobz-api.herokuapp.com/api/spamcall?no=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `${res.data.logs}`
m.reply('*FITUR NONAKTIF')
  //  conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(spamcall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler