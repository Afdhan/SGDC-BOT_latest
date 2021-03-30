let axios = require("axios");
let handler = async(m, { conn, text }) => {
let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
    if (!txt) return conn.reply(m.chat, 'Silahkan masukan kata kunci', m)

//  await m.reply('*[ WAIT ]* _Searching..._')
axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${txt}`).then((res) => {
    let hasil = `
_JUMLAH ADA:_ *${res.data.result.jumlah}*

*[ • SGDC-BOT • ]*
`.trim()
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(jhuruf)$/i
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
