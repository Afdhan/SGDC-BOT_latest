let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
 axios.get(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${text}`).then((res) => {
 // let hh = `${res.data.result}`
conn.reply(m.chat, `${res.data.result}`, m)
  }) 
 } else if (!chat.simi) m.reply('*MODE SIMI BELUM DIAKTIFKAN!*')
}
                      
handler.customPrefix = /(a|b|c|d|e|f|g|h|i)/i
handler.command = new RegExp
//handler.command = /(?:)/i
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

