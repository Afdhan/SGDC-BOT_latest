let axios = require("axios");
let handler = async(m, { conn, text }) => m

let m = /(a|b|c|d|e|f)/i
handler.before = m => {
axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then((res) => {  
  let chat = global.DATABASE.data.chats[m.chat]
  let simi = `${res.data.result.jawaban}`
   conn.reply(m.chat, simi, m)
}

module.exports = handler


