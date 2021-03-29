let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Judul Lagu!', m)

  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://videfikri.com/api/liriklagu/?query=${text}`).then((res) => {
    let hasil = `
*Judul:* ${res.data.result.title}
*Artist:* ${res.data.result.artist}
*Lirik:* 
${res.data.result.lirik}

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(lirik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler


// MUHAMMAD AFDHAN