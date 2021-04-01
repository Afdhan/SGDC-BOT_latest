let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Link!', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
	axios.get(`https://fzn-gaz.herokuapp.com/api/igdl?url=${text}`).then ((res) => {
	 	let hasil = `
*KLIK LINK UNTUK DOWNLOAD*

*Userame:* ${res.data.result.username}
*Caption:* ${res.data.result.caption}
*Link:* ${res.data.result.url}

_Download Sendiri, Jangan Manja :v_

*[ • SGDC-BOT • ]*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(igdl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler