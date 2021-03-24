let axios = require("axios");
let handler = async (m, { conn, text }) => {
  
axios.get(`https://videfikri.com/api/simsimi/?teks=${text}`).then((res) => {  
  //let chat = global.DATABASE.data.chats[m.chat]
  let simi = `${res.data.result.jawaban}`
   conn.reply(m.chat, simi, m)
   })
}

handler.customPrefix = /an|ab|su|mek|tol|ok|log|sat|ck|ik|pus|tod|nge|en|col|ge|ba|he|ka/i
handler.command = new RegExp

module.exports = handler

