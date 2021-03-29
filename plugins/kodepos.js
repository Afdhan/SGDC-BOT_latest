let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan Lokasi', m)

//  await m.reply('*[ WAIT ]* _Seda..._')
axios.get(`https://xnxx-tbot.herokuapp.com/api/kodepos?kota=${text}&apikey=tbot`).then((res) => {
    let hasil = `
*KODE POSTAL*
${res.data.result.data.postalcode}

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(kodepos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
