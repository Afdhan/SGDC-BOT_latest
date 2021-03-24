let axios = require("axios");
let handler = async(m, { conn, text }) => {
//let name = conn.getName(m.sender)
    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama yang akan diartikan', m)

  await m.reply('Searching...')
	axios.get(`https://videfikri.com/api/primbon/artinama/?nama=${text}`).then ((res) => {
	 	let hasil = `
*ARTI NAMA ${text}*
${res.data.result.arti}

*DESKRIPSI:*
${res.data.result.desk}
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(arti(nama)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
