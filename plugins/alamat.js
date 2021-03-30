let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan alamat yang ingin dicari', m)

  await m.reply('*[ WAIT ]* _Searching..._')
	axios.get(`https://api.vhtear.com/infoalamat?query=${text}&apikey=NOT-PREMIUM`).then ((res) => {
	 	let hasil = `
*Data:* 
${res.data.result.data}
*Deskripsi:* 
${res.data.result.deskripsi}

*[ • SGDC-BOT • ]*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(infoalamat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler

//  MUHAMMAD AFDHAN
