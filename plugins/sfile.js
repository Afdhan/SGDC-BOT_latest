const { fetchJson } = require('../lib/fetcher')
let get = require('got')
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Mau cari apa?', m)

    await m.reply('*[ WAIT ]* _Sedang diproses..._')
	
    let res = axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${text}`)
    let sfil = res.data
    let hsl = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian Dari:* ${text}`
    for (let i = 0; i < sfil.result.length; i++) {
       hsl += `\n─────────────────\n\n• *Title* : ${sfil.result[i].title}\n• *Link* : ${sfil.result[i].link}\n`
     //}
       conn.reply(m.chat, hsl, m)
    }
}
							     
handler.command = /^(sfile)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
