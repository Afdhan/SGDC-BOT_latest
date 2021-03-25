let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan link', m)

//  await m.reply('*[ WAIT ]* _Seda..._')
axios.get(`https://api.xteam.xyz/shorturl/bitly?url=${text}&APIKEY=abba3220ce4a347f`).then((res) => {
    let hasil = `*Link:* ${text}\n*Short:* ${res.data.result.link}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(bitly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler