let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
 axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then((res) => {
  let hh = `${res.data.result.jawaban}`
conn.reply(m.chat, hh, m)
  }) 
 } else if (!chat.simi) m.reply('*MODE SIMI BELUM DIAKTIFKAN!*')
}
                                                                       
handler.command = /^(si(mi)?(m)?)$/i

module.exports = handler

