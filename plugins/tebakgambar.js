let fetch = require('node-fetch')
let axios = require("axios")
let timeout = 120000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let res = await /*fetch*/ axios.get(`https://api.xteam.xyz/game/tebakgambar?APIKEY=abba3220ce4a347f`)
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
_Apa Hayoo? :v_

Silahkan Dijawab!
_Timeout:_ *${(timeout / 1000).toFixed(2)} Detik!*

*[ • SGDC-BOT • ]*
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.url, 'SGDC-TG.jpg', caption, m),
      json,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `_Waktu habis! Jawabannya adalah *${json.jawaban}*_`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
handler.command = /^(tebakgambar)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
