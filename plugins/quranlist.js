let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan nomor surah', m)

  await m.reply('*[ WAIT ]* _Searching..._')
	axios.get(`https://api.vhtear.com/quran?no=${text}&apikey=NOT-PREMIUM`).then ((res) => {
	 	let hasil = `
*NAMA SURAH:* ${res.data.result.surah}
*QUR'AN:* 
${res.data.result.quran}

*[ • SGDC-BOT • ]*
`.trim()

    conn.reply(m.chat, hasil, m)
	})
}

handler.command = /^(quran(list)?)$/i
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
