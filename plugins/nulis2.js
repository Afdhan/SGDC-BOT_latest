let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Nulis apa?*', m)

  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
	axios.get(`https://api.zeks.xyz/api/nulis?text={text}%20test&apikey=apiz`).then ((res) => {
	 	let hasil = `*[ • SGDC-BOT • ]* ${res.data.result}`

    conn.sendFile(m.chat, hasil, m)
	})
}

handler.command = /^(nulis2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN
module.exports = handler