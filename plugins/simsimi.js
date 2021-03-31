let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
 axios.get(`https://api.xteam.xyz/simsimi?kata=${text}&APIKEY=abba3220ce4a347f`).then((res) => {
  let hh = `${res.data.result.jawaban}`
conn.reply(m.chat, hh, m)
  }) 
 } else if (!chat.simi) m.reply('*MODE SIMI BELUM DIAKTIFKAN!*')
}
                      
handler.customPrefix = /^!/
handler.command = /(?:)/i
handler.rowner = false
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

