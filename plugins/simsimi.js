let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
 axios.get(`https://fzn-gaz.herokuapp.com/api/simi?text=${text}`).then((res) => {
 // let hh = `${res.data.result}`
conn.reply(m.chat, `${res.data.result}`, m)
  }) 
 } else if (!chat.simi) m.reply('*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*')
}
                      
handler.customPrefix = /^! /
//handler.command = new RegExp
handler.command = /(?:)/i


handler.fail = null

module.exports = handler

