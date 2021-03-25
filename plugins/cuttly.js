let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan link', m)

//  await m.reply('*[ WAIT ]* _Seda..._')
axios.get(`https://api.xteam.xyz/shorturl/cuttly?url=${text}&APIKEY=abba3220ce4a347f`).then((res) => {
    let hasil = `*Link:* ${res.data.result.fullLink}\n*Short:* ${res.data.result.shortLink}`
conn.reply(m.chat, hasil, m)
	})
}
handler.command = /^(cut(t)?ly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
